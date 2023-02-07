const initialState = JSON.parse(localStorage.getItem('todos')) ?? {todos:[]}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
          const { id, title, description, theme } = action.payload;
            return {
                ...state,
                todos: [
                  ...state.todos,
                  {
                    id: id,
                    title: title,
                    description: description,
                    completed: false,
                    theme: theme
                  },
                ]
            };
        }
        case 'TOGGLE_TODO': {
          return Object.assign({}, state, {
            todos: state.todos.map((todo) => {
              return todo.id === action.id ?          
                Object.assign({}, todo, {completed: ! todo.completed}) : todo        
              })      
            })
        }
        case 'DELETE_TODO': {
          return ({
            ...state,
            todos: state.todos.filter(todo => {
              return todo.id !== action.id
            })
          })
        }
        default:
            return state
    }
};

export default todos