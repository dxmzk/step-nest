/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 商品
 *
 * 主商品  -存放商品一般信息
 * ｜ -单向连接
 * 规格    -存放商品差异化(库存)
 * ｜ -双向连接
 * 标签    -规格的描述(大小，颜色)
 */
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import ResultData from 'src/model/ResultData';
import { GoodsService } from './goods.service';
import { GoodsBody, ListBody } from 'src/model/body';

@Controller('goods')
export class GoodsController {
  constructor(private readonly service: GoodsService) {}

  // 查询商品列表
  @Post('list')
  queryGoods(@Body() body: ListBody): Promise<ResultData> {
    return this.service.queryGoods(body);
  }

  // 查询商品详情
  @Get('detail')
  goodsDetail(@Query('id') id: number): Promise<ResultData> {
    return this.service.goodsDetail(id);
  }

  // 创建商品
  @Post('create')
  createGoods(@Body() goods: GoodsBody): Promise<ResultData> {
    return this.service.createGoods(goods);
  }

  // 更新商品信息
  @Post('update')
  updateGoods(@Body() goods: GoodsBody): Promise<ResultData> {
    return this.service.updateGoods(goods);
  }

  // 查询sku
  @Get('querySku')
  querySku(): Promise<ResultData> {
    return this.service.querySku();
  }

  // 创建sku
  @Post('createSku')
  createSku(): Promise<ResultData> {
    return this.service.createSku();
  }

  // 更新sku
  @Post('updateSku')
  updateSku(): Promise<ResultData> {
    return this.service.updateSku();
  }

  // 查询商品特征
  @Get('queryTag')
  queryTag(): Promise<ResultData> {
    return this.service.queryTag();
  }

  // 创建商品特征
  @Post('createTag')
  createTag(): Promise<ResultData> {
    return this.service.createTag();
  }

  // 更新商品特征
  @Post('updateTag')
  updateTag(): Promise<ResultData> {
    return this.service.updateTag();
  }
}
