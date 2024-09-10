import { Controller, Get, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.userService.getHello();
  }

  @Post('register')
  async register(@Body() registerUser: RegisterUserDto) {
    delete registerUser.captcha;
    return await this.userService.create(registerUser);
  }
}
