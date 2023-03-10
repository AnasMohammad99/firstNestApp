/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor() {}
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log({
      user,
    });
    return user;
  }
}
