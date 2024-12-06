import { IsNotEmpty, IsString } from 'class-validator';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  login: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 5);
  }
}
