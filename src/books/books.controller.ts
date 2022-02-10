import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Books } from './books.entity';
import { BooksService } from './books.service';
import { NewBook } from './dto/create-book.dto';
import { ShowLimitBook } from './dto/limit-book.dto';
import { UpdateBook } from './dto/update-book.dto';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService){}

     @Get()
    async findAll(@Query() query: ShowLimitBook): Promise<Books[]>{
        return this.booksService.findAll();
    }

    @Get(':id')
    async findId(@Param('id')id:string): Promise<Books>{
        return this.booksService.findOne(id);
    }

    @Post()
    async create(@Body() newBook: Books){
        this.booksService.createBook(newBook);
        return `This action creates new book!`
    }

    @Delete(':id')
    delete(@Param('id')id:string){
        this.booksService.deleteBook(id);
        return `This action delete a No.${id} book`;
    }

    @Put(':id')
    updateId(@Param('id')id:string, @Body() updateBook: Books){
        this.booksService.updateBook(id,updateBook);
        return `This action update a No.${id} book`;
    }

    
}
