export class Projetos {
id?: number;
nome: string;
descricao: string;
img: string;

constructor(nome: string, descricao: string, img: string){
    this.nome = nome;
    this.descricao = descricao;
    this.img = img;
}

}
