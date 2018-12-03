const Pessoa = {
    nome: 'Nome da Pessoa',
    idade: 37,
    gênero: 'M',
    comer: function(){
        console.log('Pessoa Comendo ...');
    },
    beber: function(){
        console.log('Pessoa Bebendo ...');
    }
};

console.log(`Nome: ${Pessoa.nome}`);
console.log(`Idade: ${Pessoa.idade}`);
console.log(`Gênero: ${Pessoa.gênero}`);
Pessoa.comer();
Pessoa.beber();

let i = {};
let o = {};
let t = {};
let turma = {}