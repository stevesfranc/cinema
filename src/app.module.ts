import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/modules/users.modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/users.entities';

 
@Module({
  imports: [
    AppModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cinema',
      entities: [Users],
      synchronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
