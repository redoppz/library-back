import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: any): Promise<any> {
    const user = await this.usersService.getUserByEmail(username);
    if (user && user.hashPassword === password) {
      const { hashPassword, ...result } = user;
      return result;
    }
    return null;
  }
}
