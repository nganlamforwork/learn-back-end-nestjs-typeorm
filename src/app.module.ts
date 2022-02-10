import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './books/books.entity';
import { BooksModule } from './books/books.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'library',
      entities: [Books],
      synchronize: true,
    }), BooksModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
