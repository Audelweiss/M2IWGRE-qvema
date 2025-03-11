import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from './user.interface';

@Injectable()
export class UsersService {
  private users: IUser[] = [
    {
      id: '1',
      username: 'test',
    },
    {
      id: '2',
      username: 'test2',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string): IUser {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('ya pas');
    }
    return user;
  }
}
