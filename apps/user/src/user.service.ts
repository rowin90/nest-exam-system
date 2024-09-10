import { Injectable, Inject } from '@nestjs/common';
import { RedisService } from '@app/redis';
@Injectable()
export class UserService {
  @Inject(RedisService)
  redisService: RedisService;

  async getHello(): Promise<string> {
    const keys = await this.redisService.keys('*');
    return 'Hello World!' + keys;
  }
}
