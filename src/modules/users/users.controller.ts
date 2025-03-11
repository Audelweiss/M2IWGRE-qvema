import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): IUser[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): IUser {
    return this.usersService.findOne(id);
  }
}
