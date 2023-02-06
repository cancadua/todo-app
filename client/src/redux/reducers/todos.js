const initialState = {
  todos: [
    {
      id: 1,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 2,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 3,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 4,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 5,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 6,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 7,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 8,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 9,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 10,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 11,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 12,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 13,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 14,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 15,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 16,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 17,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 18,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 19,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 20,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 21,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 22,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 23,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 24,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 25,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 26,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 27,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 28,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 29,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 30,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 31,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 32,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 33,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 34,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 35,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 36,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 37,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 38,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 39,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 40,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 41,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 42,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 43,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 44,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 45,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },{
      id: 46,
      title: "TodoList 1",
      description: "This is first todo",
      completed: true,
    },
    {
      id: 47,
      title: "TodoList 2",
      description: "This is second todo",
      completed: true,
    },
    {
      id: 48,
      title: "TodoList 3",
      description: "This is third todo",
      completed: false,
    },
  ],
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
          const { id, title, description } = action.payload;
            return {
                ...state,
                todos: [
                  ...state.todos,
                  {
                    id: id,
                    title: title,
                    description: description,
                    completed: false,
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
        default:
            return state
    }
};

export default todos