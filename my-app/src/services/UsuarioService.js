let usuarios = [];

const salvar = (usuario) =>{
    if(usuario && !usuario.id){
        if(!usuario.id){
            usuario.id = new Date().getTime();
            usuarios.push(usuario);
        }else{
            let base = usuarios.find(u => u.id == usuario.id)
            if(base){
                base.nome = usuario.nome
                base.email = usuario.email
                base.senha= usuario.senha
            }
        }
    }
}

const getUsuarios = ()=>{
    return usuarios;
}

const getUsuario = id => usuarios.find(u => u.id == id);

const remover = id => {
    usuarios = usuarios.filter( u => u.id != id);
}

const UsuarioService = {
    getUsuarios,
    getUsuario,
    salvar,
    remover
};

export default UsuarioService;