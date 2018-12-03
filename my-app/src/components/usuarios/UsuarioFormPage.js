import React from 'react';
import HeaderPage from '../HeaderPage';
import UsuarioForm from './UsuarioForm';
import UsuarioService from '../../services/UsuarioService';
class UsuarioFormPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            errorMessage:{
                nome: '',
                email:'',
                senha:'',
            }
        }
    }

    onSalvar = ({id = null, nome, email, senha})=>{
        UsuarioService.salvar({id,nome,email,senha});
        this.props.history.push('/usuarios');
    }

    render(){
       
        return(
            <div>
                <HeaderPage title = "Formulário de Usuários"></HeaderPage>
                <UsuarioForm 
                error = {this.state.errorMessage}
                onSave={this.onSalvar}
                ></UsuarioForm>
            </div>
        )
    }
}

export default UsuarioFormPage;