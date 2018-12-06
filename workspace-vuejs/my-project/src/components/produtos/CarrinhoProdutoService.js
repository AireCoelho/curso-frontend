let produtos = [];

const add = (produto)=>{
    const prod = produtos.find(p => p.id === produto.id);
    if(!prod){
        produtos.push(produto);
    }
}

const clear = ()=>{
    produtos = [];
}

const getProdutos = ()=>{
    return produtos;
}

const CarrinhoProdutoService = {
    add,
    clear,
    getProdutos
}

export default CarrinhoProdutoService;