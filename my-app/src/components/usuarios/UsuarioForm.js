import React from 'react';
import './UsuarioForm.css'

const UsuarioForm = ({error,onSave}) => {
    const submit = (event)=>{
        event.preventDefault();
        const {id, nome, email, senha} = event.target;
        const data = {
            id:id.value,
            nome:nome.value,
            email:email.value,
            senha:senha.value
        }
        onSave(data);
        event.target.reset();
    }
    return (
        <div className="usuario-form">
            <form onSubmit={submit}>
            <div className="form-group">
                <label htmlFor="id">Id</label>
                <input type="text" readOnly name="id" id="id" className="form-control" />
               
            </div>

             <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="nome" id="nome" className="form-control"/>
                {error.nome ? (<p>{error.nome}</p>): null}
            </div>

             <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" className="form-control"/>
                {error.email ? (<p>{error.email}</p>): null}
            </div>

             <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="password" name="senha" id="senha" className="form-control"/>
                {error.senha ? (<p>{error.senha}</p>): null}
            </div>
            <div className="form-group">
                <button type = "submit" className="btn-submit"> Salvar </button>
            </div>
            </form>
        </div>
    )
}

export default UsuarioForm;