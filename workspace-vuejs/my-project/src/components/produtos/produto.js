export default class Produto{

    id;
    nome;
    descricao;
    preco;
    imagem;

    constructor(params){

        this.id = params.id;
        this.nome = params.nome;
        this.descricao = params.descricao;
        this.preco = params.preco;        
        this.imagem = params.imagem;

    }
}