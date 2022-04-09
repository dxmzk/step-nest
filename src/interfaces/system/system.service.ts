/**
 * Create By: Meng
 * Create Date: 2022-04
 * Desc: 
 */
import { Injectable } from '@nestjs/common';
import AppResult from 'src/modules/AppResult';

@Injectable()
export class SystemService {
  // 
  async queryConfig(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }
  // 
  async queryUpdate(id: number): Promise<AppResult> {
    return AppResult.succee("");
  }
}
