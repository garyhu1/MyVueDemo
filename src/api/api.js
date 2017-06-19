import axios from 'axios';

export const getTodoList = params => {
    return axios.get('./data/list.json', {
        params: params
    });
}

export const addTodo = params => {
    return axios.post('/todo/addTodo', params).then(res => res.data);
}