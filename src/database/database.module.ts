import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    })
  ],
  providers: [DatabaseService],
  exports: [TypeOrmModule]
})
export class DatabaseModule { }
