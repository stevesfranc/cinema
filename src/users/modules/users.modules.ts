import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from '../contollers/users.contollers';
import { Users } from '../entities/users.entities';
import { UserService } from '../services/users.services';
 
@Module({
  imports:[
    TypeOrmModule.forFeature([Users])
  ],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}