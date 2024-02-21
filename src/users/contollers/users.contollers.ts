import { Controller, Get, Query, Post, Body, Put, Param, Delete, ValidationPipe, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { validate } from 'class-validator';
 import { CreateUsersDto, GetUserByIdDto, ListAllEntities, UpdateUsersDto } from '../dto/users.dto';
 
@Controller('users')
export class UsersController {
    
  @Post()
  async create(@Body() createUserDto: CreateUsersDto) {
     return createUserDto;
  }

  @Get()
  findAll(@Query() query: ListAllEntities) {
    return `This action returns all cats`;
  }

  @Get(':id')
  async findOne(  @Param('id', ParseIntPipe) id: number ) {
     return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUsersDto: UpdateUsersDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `This action removes a #${id} cat`;
  }
}