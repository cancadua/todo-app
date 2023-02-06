import { addTodo } from '../redux/actions';
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";

const TaskCard = ({todo}) => {

	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(toggleTodo(todo.id));
	}

	return (
		<button onClick={onClick} className='p-3 border-purple-400 border-2 rounded-xl flex bg-white hover:bg-red-100'>
			<div>
				<h1 className="text-3xl p-3">
				 {todo.title}
				</h1>
				<h1>
				 {todo.description}
				</h1>
			</div>
			
{
				todo.completed ? 
				<span className="w-8 self-center text-green-700 text-3xl pl-3">✔</span> : 
				<span className="w-8 self-center text-red-700 text-3xl pl-3">✘</span> 
			}
		</button>
	)
}

export default TaskCard