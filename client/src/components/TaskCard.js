import { addTodo } from '../redux/actions';
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";

const TaskCard = ({todo}) => {

	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(toggleTodo(todo.id));
	}

	return (
		<div className='grid grid-cols-1 grid-rows-3 p-0 border-black overflow-hidden border-2 rounded-xl bg-white hover:bg-red-100'>
			
				<div className='p-2 row-span-1 bg-green-900/80 w-full overflow-hidden border-black border-b-2 flex 
								justify-center items-center content-center text-center'>
					<h1 className="text-3xl p-3 text-white">
					 {todo.title}
					</h1>
					<button className='bg-green-900/80 text-5xl h-1/2 rounded-full aspect-square border-white border-2'/>
				</div>
			
				<button className='row-span-2 'onClick={onClick}>
					<h1>
						 {todo.description}
					</h1>
					<div>
					{
						todo.completed ? 
						<span className="w-8 self-center text-green-700 text-3xl pl-3">✔</span> : 
						<span className="w-8 self-center text-red-700 text-3xl pl-3">✘</span> 
					}
					</div>
				</button>
		</div>
		
	)
}

export default TaskCard