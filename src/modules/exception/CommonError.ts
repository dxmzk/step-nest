/**
 * Author: Meng
 * Date: 2022-03-09
 * Desc:
 */

import AppException from './AppException';

const CommonError = {
  PWD_PARAM: AppException.gen('密码规则有误！', 20001),
  ACCOUNT_OUTOF: AppException.gen('账号字符过长！', 20002),
  ACCOUNT_EXIST: AppException.gen('账号已存在！', 20003),
  ACCOUNT_UNLL: AppException.gen('请输入账号！', 20004),
  CODE_ERROR: AppException.gen('验证码错误！', 20005),

  LOGIN_ERROR: AppException.gen('账号或密码有误！', 20020),
  REGISTE_ERROR: AppException.gen('账号注册失败！', 20021),
  ACCOUNT_ERROR: AppException.gen('账号或密码有误！', 20022),
  AC_CODE_ERROR: AppException.gen('账户或验证码错误！', 20023),

  NOT_LOGIN: AppException.gen('您尚未登录, 请登录！', 20030),
  TOKEN_ERROR: AppException.gen('无效凭证, 请登录！', 20031),
  TOKEN_OUT: AppException.gen('账号登录已过期, 请重新登录！', 20032),
  AUTH_ERROR: AppException.gen('凭证创建失败, 请重新登录！', 20033),

  UNKNOWN_ERROR: AppException.gen('未知异常！', 10101),
  SQL_ERROR: AppException.gen('数据库操作失败', 10102),
  PARAM_ERROR: AppException.gen('必要参数缺失！', 10103),
  QUERY_ERROR: AppException.gen('查询失败！', 10104),
  CREATE_ERROR: AppException.gen('创建失败！', 10105),
  UPDATE_ERROR: AppException.gen('数据更新失败！', 10106),
  DELETE_ERROR: AppException.gen('数据删除失败！', 10107),
  NO_DATA_ERROR: AppException.gen('未查询到数据', 10108),

  CUSTOM_ERROR: (err: Error, code=11010) => AppException.gen(err.message, code),
};

export default CommonError;
