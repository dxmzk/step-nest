/**
 * Create By: Meng
 * Create Date: 2022-03
 * Desc: 
 */

import AppException from "./AppException";

const Errors = {
  PWD_PARAM: AppException.init('密码规则有误！', 200001),
  PWD_ERR: AppException.init('账号密码有误！', 200002),
  ACCOUNT_PARAM: AppException.init('登录参数有误！', 200010),
  ACCOUNT_REPEAT: AppException.init('账号重复！', 200011),
  ACCOUNT_OUTOF: AppException.init('账号字符过长！', 200012),
  ACCOUNT_ERROR: AppException.init('账号或密码有误！', 200013),
  ACCOUNT_NOT: AppException.init('账号不存在！', 200014),
  LOGIN_ERROR: AppException.init('账号规则有误！', 200020),
  PARAM_ERROR: AppException.init('参数有误', 200100),
  UNKNOWN_ERROR: AppException.init('未知异常', 100101),
}

export default Errors;