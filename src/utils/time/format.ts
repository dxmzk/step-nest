/**
 * Author: Meng
 * Date: 2022-10-26
 * Desc:
 * js内置 Intl 格式化数据文档: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl
 */

// 格式化时间
export function formatDate(format: string, date?: Date) {
  if(date == null) {
    date = new Date();
  }
  const year = date.getFullYear();
  const month = formatNum(date.getMonth() + 1);
  const day = formatNum(date.getDate());
  const hour = formatNum(date.getHours());
  const minute = formatNum(date.getMinutes());
  const second = formatNum(date.getSeconds());

  switch (format.toLowerCase()) {
    case 'yyyy-mm-dd':
      return `${year}-${month}-${day}`;
    case 'hh:mm:ss':
      return `${hour}:${minute}:${second}`;
    case 'yyyy-mm-dd hh:mm:ss':
    case 'yyyy-mm-dd hh:mm:ss':
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    case 'yyyy/mm/dd':
      return `${year}/${month}/${day}`;
    case 'yyyy/mm/dd hh:mm:ss':
    case 'yyyy/mm/dd hh:mm:ss':
      return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    case 'yyyymmdd':
      return `${year}${month}${day}`;
    case 'yyyymmdd hhmmss':
    case 'yyyymmdd hhmmss':
      return `${year}${month}${day} ${hour}${minute}${second}`;
    case 'yyyymmdd':
      return `${year}${month}${day}`;
    case 'yymmddhhmm':
      return `${year % 100}${month}${day}${hour}${minute}`;
    case 'yyyymmddhhmmss':
      return `${year}${month}${day}${hour}${minute}${second}`;
    default:
      return `${date.getTime()}`;
  }
}
// 解析时间
function parseDate(date: string) {
  switch (date) {
    case 'yyyy-mm-dd':
      return;
    case 'hh:mm:ss':
      return;
    case 'yyyy-mm-dd hh:mm:ss':
      return;
    case 'yyyy/mm/dd':
      return;
    case 'yyyy/mm/dd hh:mm:ss':
      return;
    case 'yyyymmdd':
      return;
    case 'yyyymmdd hhmmss':
      return;
    case 'YYmmddhhmmss':
      return;
    case 'yyyymmddhhmmss':
      return;
    default:
      return;
  }
}

// 格式化数字
function formatNum(num: number): string {
  return `${num > 9 ? '' : '0'}${num}`;
}

// 格式化数字
export function formatNowDate(): string {
  return formatDate('yyyy-mm-dd hh:mm:ss');
}
