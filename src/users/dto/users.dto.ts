import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpUserDto {
  @IsString()
  @MinLength(10)
  @IsNotEmpty()
  @ApiProperty({ example: 'demo@demo.ru', description: 'User email' })
  email?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'demo_password', description: 'User password' })
  password?: string;
}

export class SignInUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ example: 'demo@demo.ru', description: 'User email' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'demo_password', description: 'User password' })
  password: string;
}
