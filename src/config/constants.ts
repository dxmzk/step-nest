/**
 * Author: Meng
 * Date: 2022-07-06
 * Desc:
 */

export enum RunEnv {
  Dev = 'dev',
  Prod = 'prod',
  Test = 'test',
}
// interface ConstantData {
//   port: number;
//   ws_port: number;
//   run_env: RunEnv;
//   jwt_secret: string;
//   jwt_key: string;
//   aes_key: string;
// }

const Constants = {
  port: 8087,
  ws_port: 87,
  token_valid_time: 1440, // 分钟
  run_env: RunEnv.Dev,
  def_pwd: '123@qwer',
  jwt_secret: 'AKwq3nTLSIfSVZp7yTRAchZJPH9M',
  jwt_key: 'AKwq3nTLSIfSVZp7yTRAchZJPpM',
  aes_key: 'AKwq3nTLSIfSVZp7yTRAchZJJqpM'
};

export default Constants;
