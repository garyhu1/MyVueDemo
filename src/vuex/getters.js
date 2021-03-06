export const doneTodo = state => {
    return state.todos.filter(todo => todo.done);
}


export const doneTodoLength = (state, getters) => {
    return getters.doneTodo.length;
}

export const getTitle = state => {
    return state.title;
}