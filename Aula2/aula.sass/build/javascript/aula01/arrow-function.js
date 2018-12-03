
const mensagens = [
    "Quem avisa amigo é",
    "25% não é 25% é 20% + 5% de 50% que dá 20%... Presidenta",
    "Eu tenho um plano para estocar vento...",
    "Eu quero saber o que é armazenar na nuvem, eu não sei o que é essa nuvem",
    "Não importa quem vai ganhar ou perder porque ganhando ou perdendo a gente vai perder... Presidenta",
    "Eu to saudando a mandioca... Presidenta"
]

mensagens.forEach(mensagem => console.log('mensagem = >', mensagem));

function externa() {
    console.log(this);
    const interna = function () {
        console.log(this);
    }
    interna();
}
new externa;