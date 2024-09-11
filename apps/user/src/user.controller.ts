import {
  Controller,
  Get,
  Body,
  Post,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.userService.getHello();
  }

  @Get('stream')
  async getTxt() {
    const filePath = join(__dirname, '1.txt'); // 替换为你的文件路径
    const fileStream = createReadStream(filePath);

    return new StreamableFile(fileStream, {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      disposition: 'attachment; filename=exported-data.xlsx',
    });
  }

  @Post('register')
  async register(@Body() registerUser: RegisterUserDto) {
    delete registerUser.captcha;
    return await this.userService.create(registerUser);
  }
}
