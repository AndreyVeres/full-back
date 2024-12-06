import {Controller, Get, Param, Post} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.userService.findById(id);
  }
}
