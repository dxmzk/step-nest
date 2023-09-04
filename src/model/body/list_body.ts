/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc: 
 */

// 列表查询参数
export class ListBody {
  public sort?: number; // 排序
  public keyword?: string; // 搜索关键字
  public pageNum: number;
  public pageSize: number;
}