/**
 * Author: Meng
 * Date: 2022-10-28
 * Desc:
 * 
export class AuthService {
  constructor(private service: UsersService,private jwtService: JwtService ) {}
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.service.findOne(username);
  }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const access_token = this.jwtService.sign(payload),
  }
}
 */

import { JwtModule } from '@nestjs/jwt';
import Constants from '../../config/constants';

export function jwt_config() {
  return JwtModule.register({
    secret: Constants.jwt_secret,
    secretOrPrivateKey: Constants.jwt_key,
    signOptions: { algorithm: 'ES256', expiresIn: '7d' },
  });
}

export const jwt_options = {
  secret: Constants.jwt_secret,
  // privateKey: constants.jwt_key,
};
