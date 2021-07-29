import { Livro } from './livro.model';
import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from "@nestjs/common";
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
    constructor(private livroService: LivrosService) {
    }

    @Get()
    list(): Livro[] {
        return this.livroService.list();
    }

    @Get(':id')
    findById(@Param() params): Livro {
        console.log(params.id)
        return this.livroService.findById(params.id);
    }

    @Post()
    create(@Body() livro: Livro) {
        this.livroService.create(livro);
    }

    @Put()
    edit(@Body() livro: Livro): Livro {
        return this.livroService.edit(livro);
    }

    @Delete(':id')
    delete(@Param() params) {
        this.livroService.delete(params.id);
    }
}