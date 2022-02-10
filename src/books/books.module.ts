import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { Books } from './books.entity';
import { BooksService } from './books.service';

@Module({
    imports: [TypeOrmModule.forFeature([Books])],
    controllers: [BooksController],
    providers: [BooksService],
    exports: [BooksService]
  })
  export class BooksModule {}
