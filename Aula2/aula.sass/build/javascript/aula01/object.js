//propiedades
//ações

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
let turma = {
    alunos: [
        {nome: 'João', notas: [10,9,8,10]},
        {nome: 'Maria', notas: [10,10,10,10]},
        {nome: 'Ana', notas: [9,9,10,10]}
    ],
    sala: 101,
    nome: "101"
};
const calcularSoma = function(soma,atual){
    return soma + atual;
};

const mostrarDadosAluno = function(alunoAtual){
    console.log(`Aluno: ${alunoAtual.nome}`);
    console.log(`Notas: ${alunoAtual.notas}`);
    const media = alunoAtual.notas.reduce(calcularSoma,0) / alunoAtual.notas.length;
    console.log(`Média Final: ${media}`);
};

console.log(`Turma: ${turma.nome}`);
console.log(`Sala: ${turma.sala}`);
turma.alunos.forEach(mostrarDadosAluno);
    


function Contato(nome,email,telefone){

    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    const self = this;
    this.ligar = function(){
        console.log(`Ligando para o número ${self.telefone}`)
    }
    this.enviarEmail = function(mensagem= ''){
        console.log(`Enviando email \n to: ${self.email} \n content: ${mensagem}`);
    }
}

let c1 = new Contato('João', 'joao@teste.com','33221100');
let c2 = new Contato('Maria', 'maria@teste.com','99887766');
console.log(c1.nome);
console.log(c2.nome);
c1.ligar();
c2.enviarEmail('Olá, Bem-vindo(a) ao programa de estudos Apex!');



class Funcionario{
    constructor(nome,salario){
        this.nome = nome;
        this.salario = salario;
    }

    imprimirFolhaPagamento(){
        console.log("===================")
        console.log("FOLHA DE PAGAMENTO")
        console.log("===================")
        console.log(`Nome: ${this.nome}`);
        console.log(`Salário: ${this.salario.toFixed(2)}`);
        console.log("===================")
    }
}

const f1 = new Funcionario('Pedro', 1200);
const f2 = new Funcionario('Leonardo', 4680.59);
const f3 = new Funcionario('Fernanda', 7800.39);
const f4 = new Funcionario('Mariana', 3200.90);
f1.imprimirFolhaPagamento();
f2.imprimirFolhaPagamento();
f3.imprimirFolhaPagamento();
f4.imprimirFolhaPagamento();
