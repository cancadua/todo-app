import * as actionTypes from './actionTypes'

export const addTodo = todo => ({
    type: actionTypes.ADD_TODO,
    payload: {
      id: Date.now(),
      title: todo?.title,
      description: todo?.description,
      theme: todo?.theme
    },
});

export const setVisibilityFilter = filter => ({
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: actionTypes.TOGGLE_TODO,
    id
});

export const setTheme = (id, theme) => ({
    type: actionTypes.SET_THEME,
    id: id,
    theme: theme
});

export const deleteTodo = (id) => ({
    type: actionTypes.DELETE_TODO,
    id: id
});

export const VisibilityFilters = {
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_ALL: 'SHOW_ALL'
};

export const getTodoList = state => state.todos.todoList