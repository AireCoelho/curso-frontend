import React from 'react';

const Row = ({record})=>(<tr>
    <td>{record.id}</td>
    <td>{record.nome}</td>
    <td>{record.email}</td>
</tr>);

const UsuarioList = ({usuarios})=>{
    const rows = usuarios.map(u => (<Row record = {u} key = {u.id}></Row>));
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default UsuarioList;