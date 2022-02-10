import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    author:string;

    @Column()
    year:number;

    @Column()
    country: string;

    @Column()
    language: string;

    @Column()
    pages: number;

    @Column()
    imageLink: string;

    @Column()
    link: string
}