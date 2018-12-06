const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
let count = 1;
let clientes = [
    {
        id: count++,
        nome:'João da Silva',
        email:'js@teste.com',
        telefone:'3322-1100',
        endereco:{
            rua: 'Rua Principal',
            numero: '1000',
            complemento: 'Apartamento 701',
            bairro: 'Centro',
            cidade: 'Blumenau',
            uf: 'SC'
        }
    },
    {
        id: count++,
        nome:'Maria Fagundes',
        email:'mf@teste.com',
        telefone:'1122-3344',
        endereco:{
            rua: 'Rua Secundária',
            numero: '1',
            complemento: 'Apartamento 902',
            bairro: 'Centro',
            cidade: 'Blumenau',
            uf: 'SC'
        }
    }
]


const buscarTodos = (req,res)=>{
    res.json(clientes);
}

const buscarPorId = (req,res) =>{
    const {id} = req.params;
    const cliente = clientes.find(cli => cli.id == id);
    if(cliente){
        res.json(cliente);
    }
    else{
        res.sendStatus(404);
    }
}

const inserir = (req,res) =>{
    const { nome, email, telefone, endereco} = req.body;
    const id = new Date().getTime();
    clientes.push({id, nome, email, telefone, endereco});
    res.status(201).json({id})
}

const update = (req,res) =>{
    const {id} = req.params;
    const { nome, email, telefone, endereco} = req.body;
    const cliente = clientes.find(cli => cli.id == id);
    if(cliente) {
        cliente.nome = nome;
        cliente.email = email;
        cliente.telefone = telefone;
        cliente.endereco = endereco;
        res.sendStatus(204);
    }
    else{
        res.sendStatus(406);
    }
}


const remove = (req,res) => {
    const {id} = req.params;
    clientes = clientes.filter(cli => cli.id != id);
    res.sendStatus(204);
}

app.get('/api/clientes',buscarTodos);
app.get('/api/clientes/:id',buscarPorId);
app.post('/api/clientes/',inserir);
app.put('/api/clientes/:id',update);
app.delete('/api/clientes/:id',remove);

app.listen(3000,()=>{
    console.log('Servidor rodando na porta 3000');
})
