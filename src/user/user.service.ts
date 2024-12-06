import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findByLogin(login: string) {
    const user = await this.userRepository.findOneBy({ login });

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async findById(id: string) {
    console.log(id);
    return await this.userRepository.findOneBy({ id });
  }

  async create(userData: CreateUserDto) {
    const user = await this.userRepository.findOne({
      where: { login: userData.login },
    });
    if (user) throw new BadRequestException('user already exist');

    const newUser = this.userRepository.create(userData);
    await this.userRepository.save(newUser);

    delete newUser.password;
    return newUser;
  }
}
