/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 菜单
 */
import { Injectable } from '@nestjs/common';
import AppDataSource from '../../config/app_sql_source';
import ResultData from '../../model/ResultData';
import { MenuBody } from '../../model/body/index';
import { MenuEntity, Account } from '../../model/entity/index';
import CommonError from '../../modules/exception/CommonError';
import { parseToken } from '../../utils/token_utils';

@Injectable()
export class MenuService {
  constructor() {}

  // 查询菜单
  async queryMenu(token: string): Promise<ResultData> {
    if (token == null) {
      throw CommonError.PARAM_ERROR;
    }
    const info = parseToken(token);
    const user = await AppDataSource.getRepository(Account).findOneBy({
      id: info.uid,
    });
    if (!user) {
      throw CommonError.TOKEN_OUT;
    }

    let list = [];
    let role = user.roles;

    try {
      list = await AppDataSource.getRepository(MenuEntity)
        .createQueryBuilder('menu')
        // .leftJoinAndMapOne(MenuEntity, 'm', 'menu.pid = m.id or menu.id = 0')
        .leftJoinAndMapMany('menu.children', MenuEntity, 'm', 'm.pid = menu.id')
        .leftJoinAndMapMany('m.children', MenuEntity, 'm2', 'm2.pid = m.id')
        .where('menu.enable > 0')
        // .andWhere('menu.auth IN (:...roles)', { roles })
        .andWhere('menu.auth >= :role', { role })
        .andWhere('menu.pid = 0')
        .getMany();
    } catch (error) {
      console.log(error);
      throw CommonError.QUERY_ERROR;
    }
    return ResultData.success(list);
  }

  // 创建菜单
  async createMenu(body: MenuBody): Promise<ResultData> {
    if (body.label == null || body.path == null || body.pid < 0) {
      throw CommonError.PARAM_ERROR;
    }
    let info = await AppDataSource.getRepository(MenuEntity).save(body);
    return ResultData.success(info);
  }

  // 更新
  async updateMenu(body: MenuBody): Promise<ResultData> {
    const id = body.id;
    if (id == null || id < 1) {
      throw CommonError.PARAM_ERROR;
    }
    delete body.id;
    const res = await AppDataSource.createQueryBuilder()
      .update(MenuEntity)
      .set(body)
      .where('id = :id', { id })
      .execute();
    if (res.affected != 1) {
      throw CommonError.UPDATE_ERROR;
    }
    return ResultData.success('菜单修改成功');
  }

  // 删除菜单
  async deleteMenu(id: number): Promise<ResultData> {
    console.log('deleteMenu: ', id);
    return ResultData.success('');
  }

  /** 根据角色获取菜单 */
  private _formRoleGetMenu(role: number): Array<number> {
    let list = [];
    return list;
  }
}
