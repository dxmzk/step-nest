"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'admin123',
    database: 'test3',
    entities: ["dist/**/*.entity{.ts,.js}"],
    logging: false,
    synchronize: true,
});
AppDataSource.initialize()
    .then((res) => {
})
    .catch((error) => console.log(error));
exports.default = AppDataSource;
//# sourceMappingURL=sql_source.js.map