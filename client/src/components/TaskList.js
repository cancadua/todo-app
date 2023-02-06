import TaskCard from './TaskCard'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const TaskList = () => {
  const todos = useSelector((state) => state.todos.todos);

	return (
		<div className='self-center p-8 gap-4 flex flex-wrap justify-left w-auto'>
			{todos && todos.map((todo, index) => (
				<TaskCard todo={todo}/>
				))}
		</div>
	)
}

export default TaskList