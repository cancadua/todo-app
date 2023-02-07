import TodoCard from './TodoCard'
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => {
  	const todos = state.todos
  	localStorage.setItem('todos', JSON.stringify(todos))
  	return todos.todos
  });


	return (
		<div className='self-center p-8 gap-4 flex flex-wrap justify-center w-auto'>
			{todos && todos.map((todo) => (
				<TodoCard todo={todo} key={todo.id} />
				))}
			
			
		</div>
	)
}

export default TodoList