/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */

export class GoodsBody {
  public id?: number;
  public title: string; //
  public describe: string;
  public cover: string; //
  public memo: string; //
  public tag: number;
  public price: number;
  public min_price: number;
  public status = 0; //

  public skus: Array<GoodsSkuBody>;
}

export class GoodsSkuBody {
  public id?: number;
  public goods_id: number;
  public sku_code: string;
  public sku_name: string;
  public describe: string;
  public cover: string;
  public imgs: string;
  public img_host: string;
  public price: number;
  public stock: number;
  public unit_id: number;
  public sales = 0;

  public tags: Array<GoodsTagBody>;
}

export class GoodsTagBody {
  public id?: number;
  public mold: number;
  public unit: number;
  public value: string;
}
