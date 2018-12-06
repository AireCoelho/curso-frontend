import * as BackendService from '../../BackendService'

export const buscarTodos = ()=>{
    return BackendService.get('/api/clientes');
}

export const buscarPorId = (id)=>{
    return BackendService.get(`/api/clientes/${id}`);
}

