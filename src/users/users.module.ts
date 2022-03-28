import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { jwtConstants } from 'src/auth/constants';
import { DatabaseModule } from 'src/database.module';
import { Connection } from 'typeorm';
import { UsersController } from './controllers/users.controller';
import { User } from './entities/users.entity';
import { UsersService } from './services/users.service';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '1h'
      }
    })
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_REPOSITORY',
      useFactory: (conn: Connection) => conn.getRepository(User),
      inject: ['DATABASE_CONNECTION']
    },
    UsersService,
    AuthService
  ],
  exports: [UsersService]
})
export class UsersModule {}
