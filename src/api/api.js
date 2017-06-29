import axios from 'axios';

export const getTodoList = params => {
    return axios.get('https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend', {
        params: params
    });
}

export const getRecommand = params => {
    return axios.get("https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/recommend", {
        params
    });
}

export const addTodo = params => {
    return axios.post('/todo/addTodo', params).then(res => res.data);
}

export const getArticle = params => {
    return axios.get("https://www.easy-mock.com/mock/592d882391470c0ac1feb75e/sposts/article", {
        params
    });
}