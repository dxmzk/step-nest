/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 商品
 */
import { Injectable } from '@nestjs/common';
import ResultData from '../../model/ResultData';
import { GoodsBody, ListBody } from 'src/model/body/index';
import { GoodsEntity } from 'src/model/entity/goods.entity';
import AppDataSource from 'src/config/app_sql_source';
import CommonError from 'src/modules/exception/CommonError';

@Injectable()
export class GoodsService {
  constructor() {}

  // 查询商品列表
  async queryGoods(body: ListBody): Promise<ResultData> {
    const num = (body.pageNum || 1) - 1;
    const size = body.pageSize || 10;

    const reposit = AppDataSource.getRepository(GoodsEntity);
    const list = await reposit
      .createQueryBuilder('goods')
      .where('goods.title like :title', { title: `%${body.keyword||''}%` })
      .skip(size * num)
      .take(size)
      .getMany();

    const total = await reposit
      .createQueryBuilder('goods')
      .where('goods.title like :title', { title: `%${body.keyword||''}%` })
      .getCount();

    return ResultData.list(list, total, size, num + 1);
  }

  // 查询商品详情
  async goodsDetail(id: number): Promise<ResultData> {
    if (typeof id != 'number' && typeof id != 'string') {
      throw CommonError.PARAM_ERROR;
    }

    const reposit = AppDataSource.getRepository(GoodsEntity);
    const detail = await reposit
      .createQueryBuilder('goods')
      .where('goods.id = :id', { id })
      .getOne();

    return ResultData.success(detail);
  }

  // 创建商品
  async createGoods(body: GoodsBody): Promise<ResultData> {
    if(!body.title || !body.price || !body.cover || !body.describe) {
      throw CommonError.PARAM_ERROR;
    }
    // const goods = new GoodsEntity();
    const goods = GoodsEntity.create(body);

    const reposit = AppDataSource.getRepository(GoodsEntity);
    const info = await reposit.save<GoodsEntity>(goods);

    return ResultData.success(info);
  }

  // 更新商品信息
  async updateGoods(goods: GoodsBody): Promise<ResultData> {
    return ResultData.success('tag');
  }

  // 查询sku
  async querySku(): Promise<ResultData> {
    return ResultData.success('tag');
  }

  // 创建sku
  async createSku(): Promise<ResultData> {
    return ResultData.success('tag');
  }

  // 更新sku
  async updateSku(): Promise<ResultData> {
    return ResultData.success('tag');
  }

  // 查询商品特征
  async queryTag(): Promise<ResultData> {
    return ResultData.success('tag');
  }

  // 创建商品特征
  async createTag(): Promise<ResultData> {
    return ResultData.success('tag');
  }

  // 更新商品特征
  async updateTag(): Promise<ResultData> {
    return ResultData.success('tag');
  }
}
