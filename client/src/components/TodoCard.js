import { useDispatch } from "react-redux";
import { toggleTodo, setTheme, deleteTodo } from "../redux/actions";
import { useState } from "react";
import ColorPicker from "./ColorPicker"
import { useDrag, useDrop } from 'react-dnd'
import Modal from 'react-modal'


const TodoCard = ({todo}) => {
  const [color, setColor] = useState(todo.theme)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "todo",
    drop: (todo) => {
		dispatch(deleteTodo(todo.id));
	},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const presetColors = [
    "#CCE8DB",
    "#C1D4E3",
    "#BEB4D6",
    "#FADAE2",
    "#F8B3CA",
    "#CC97C1",
  ]


	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(toggleTodo(todo.id));
	}

	const newColor = (e) => {
		setColor(e)
		dispatch(setTheme(e));
	}

	return (
		<div ref={drag} className="cursor-grab grid grid-cols-1 grid-rows-3 p-0 border-black overflow-hidden border-2 rounded-xl bg-white">
				<div className="p-2 row-span-1 w-full overflow-hidden border-black border-b-2 flex justify-center items-center content-center text-center"
					 style={{backgroundColor : color}}>
					<h1 className="text-3xl p-3 text-white">
					 {todo.title}
					</h1>

					<ColorPicker
			            color={color}
			            onChange={newColor}
			            presetColors={presetColors}
			          />
				</div>
			
				<button className='row-span-2 'onClick={onClick}>
					<h1 className="p-2">
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
				<Modal
					ariaHideApp={false}
				    className='fixed bottom-0 w-full h-16'
				    overlayClassName='fixed inset-0 bg-black/60 z-30'
				    isOpen={isDragging}>
		    		<div className='justify-center bg-red-900 flex items-center text-xl text-white w-full h-full' 
		    			 ref={drop}>
		    			Drop here to delete
		    		</div>
		    	</Modal>
		</div>
		
	)
}

export default TodoCard