import React from 'react';
import HeaderPage from '../HeaderPage';
import UsuarioList from './UsuarioList';
import UsuarioService from '../../services/UsuarioService';

class UsuarioListPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      usuarios:[]
    }
  }

  componentDidMount(){
    this.setState(prevState => {
      return {
        usuarios: UsuarioService.getUsuarios()
      }
    })
  }

  render(){
    return (
      <div>
        <HeaderPage title="Lista de Usuários"></HeaderPage>
        <UsuarioList usuarios={this.state.usuarios}></UsuarioList>
      </div>
    )
  }
}

export default UsuarioListPage;