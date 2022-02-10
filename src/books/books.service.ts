import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import "reflect-metadata";
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Books)
        private booksRepository: Repository<Books>,
      ) {}

    findAll(): Promise<Books[]> {
        return this.booksRepository.find();
    }

    findOne(id: string): Promise<Books> {
        return this.booksRepository.findOne(id);
    }

    async createBook(book:Books){
        let newBook = new Books();
        newBook.title = book.title; 
        newBook.author = book.author; 
        newBook.year = book.year; 
        newBook.country = book.country; 
        newBook.language = book.language;
        newBook.pages = book.pages;  
        newBook.imageLink = book.imageLink; 
        newBook.link = book.link; 

        await this.booksRepository.save(newBook);

    }

    async deleteBook(id:string){
        await this.booksRepository.delete(parseInt(id));
    }
    
    async updateBook(id:string, book:Books){
        await this.booksRepository.update(parseInt(id), book);
    }

}
