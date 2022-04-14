

const userRepository = MyDataSource.getRepository(User)

// 保存修改
const user = new User()
user.firstName = "Timber"
user.lastName = "Saw"
user.age = 25
await userRepository.save(user)


// 查询全部
const allUsers = await userRepository.find()

const allViewedPhotos = await photoRepository.findBy({ views: 1 }) // 符合特征的全部数据


// 查询特定数据
const firstUser = await userRepository.findOneBy({ id: 1 }) // 符合条件的一个

const timber = await userRepository.findOneBy({
    firstName: "Timber",
    lastName: "Saw",
}) // find by firstName and lastName

// 删除
await userRepository.remove(timber)

/-------------------/

export class Photo {
    @OneToOne(() => PhotoMetadata, (metadata) => metadata.photo, {
        cascade: true,
    })
    metadata: PhotoMetadata
}

@Entity()
export class Photo {
    @ManyToOne(() => Author, (author) => author.photos)
    author: Author
}

@Entity()
export class Author {
    @OneToMany(() => Photo, (photo) => photo.author) // we will create author property in the Photo class below
    photos: Photo[]
}

@Entity()
export class Album {
    @ManyToMany(() => Photo, (photo) => photo.albums)
    @JoinTable()
    photos: Photo[]
}

export class Photo {
    @ManyToMany(() => Album, (album) => album.photos)
    albums: Album[]
}

/--------------/
import { AppDataSource } from "./index"

// create a few albums
const album1 = new Album()
album1.name = "Bears"
await AppDataSource.manager.save(album1)

const album2 = new Album()
album2.name = "Me"
await AppDataSource.manager.save(album2)

// create a few photos
const photo = new Photo()
photo.name = "Me and Bears"
photo.description = "I am near polar bears"
photo.filename = "photo-with-bears.jpg"
photo.views = 1
photo.isPublished = true
photo.albums = [album1, album2]
await AppDataSource.manager.save(photo)

// now our photo is saved and albums are attached to it
// now lets load them:
const loadedPhoto = await AppDataSource.getRepository(Photo).findOne({
    where: {
        id: 1,
    },
    relations: {
        albums: true,
    },
})
loadedPhoto will be equal to:

{
    id: 1,
    name: "Me and Bears",
    description: "I am near polar bears",
    filename: "photo-with-bears.jpg",
    albums: [{
        id: 1,
        name: "Bears"
    }, {
        id: 2,
        name: "Me"
    }]
}

const photos = await AppDataSource.getRepository(Photo)
    .createQueryBuilder("photo") // first argument is an alias. Alias is what you are selecting - photos. You must specify it.
    .innerJoinAndSelect("photo.metadata", "metadata")
    .leftJoinAndSelect("photo.albums", "album")
    .where("photo.isPublished = true")
    .andWhere("(photo.name = :photoName OR photo.name = :bearName)")
    .orderBy("photo.id", "DESC")
    .skip(5)
    .take(10)
    .setParameters({ photoName: "My", bearName: "Mishka" })
    .getMany()