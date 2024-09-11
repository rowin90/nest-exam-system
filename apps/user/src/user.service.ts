import { Injectable, Inject, StreamableFile } from '@nestjs/common';
import { RedisService } from '@app/redis';
import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';
@Injectable()
export class UserService {
  @Inject(RedisService)
  redisService: RedisService;

  @Inject(PrismaService)
  prisma: PrismaService;

  async getHello(): Promise<string> {
    const keys = await this.redisService.keys('*');
    return 'Hello World!' + keys;
  }
  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data,
      select: {
        id: true,
      },
    });
  }
}
