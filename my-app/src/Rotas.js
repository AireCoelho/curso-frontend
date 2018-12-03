import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BlogListPage from './components/blog/BlogListPage';
import PostPage from './components/blog/PostPage';
import UsuarioFormPage from './components/usuarios/UsuarioFormPage';
import UsuarioListPage from './components/usuarios/UsuarioListPage';



const App = ()=>(<h1>App</h1>);
const Sobre = ()=>(<h1>Sobre</h1>);
const Rotas = ()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/blog" exact={true} component={BlogListPage} />
            <Route path="/blog/post/:postId" component={PostPage} />
            <Route path="/usuarios" exact={true} component={UsuarioListPage} />
            <Route path="/usuarios/:usuarioId" component={UsuarioFormPage} />
        </Switch>
        </BrowserRouter>
    )
};

export default Rotas;