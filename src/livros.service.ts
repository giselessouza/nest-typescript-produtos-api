import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {    
    
    private readonly livros: Livro[] = 
    [
        new Livro("LIV01", "As cinco linguagens do amor", 39.90),
        new Livro("LIV02", "As cinco linguagens do perdão", 39.90),
        new Livro("LIV03", "Comunicação não-violenta", 39.90),
    ];

    list(): Livro[] {
        return this.livros;
    }

    findById(id: number): Livro {
        return this.livros[0];
    }

    create(livro: Livro) {
        this.livros.push(livro);
    }

    edit(livro: Livro): Livro {
        return livro;
    }

    delete(id: number) {
        return this.livros.pop;
    }
}
