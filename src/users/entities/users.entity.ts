import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'user unique id' })
  id: number;

  @Column({ length: 100, unique: true })
  @ApiProperty({ example: 'demo@demo.ru', description: 'User email' })
  email: string;

  @Column({ length: 100 })
  @ApiProperty({ example: 'demo_password', description: 'User password' })
  hashPassword: string;

  @CreateDateColumn()
  @ApiProperty({ example: 'system:time', description: 'User create datetime' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: 'system:date', description: 'User update datetime' })
  updatedAt: Date;
}
