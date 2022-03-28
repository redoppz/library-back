import { HttpException, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { createHmac } from 'crypto';
import { QueryFailedError, Repository } from 'typeorm';
import { User } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async createUser(email: string, password: string) {
    const secret = 'abcdefg';
    const hashPassword = createHmac('sha256', secret).update(password).digest('hex');
    let user = this.userRepository.create({
      email,
      hashPassword
    });
    try {
      await this.userRepository.save(user);
    } catch (e) {
      if (e instanceof QueryFailedError && e?.driverError?.code == '23505') {
        throw new HttpException('User is already exists.', 400);
      }
      throw e;
    }
    return user;
  }

  async getToken(userEmail: string, userPassword: string) {
    const secret = 'abcdefg';
    const user = await this.userRepository.findOne({
      where: {
        email: userEmail,
        hashPassword: createHmac('sha256', secret).update(userPassword).digest('hex')
      }
    });
    if (!user) {
      throw new HttpException('User not found!', 401);
    }
    const payload = {
      email: user.email,
      id: user.id
    };
    return {
      access_token: this.jwtService.sign(payload)
    };
  }

  async findAll() {
    return this.userRepository.find();
  }

  async deleteUser(id: string) {
    return this.userRepository.delete(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
