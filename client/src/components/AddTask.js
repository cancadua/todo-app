import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux'
import { addTodo } from "../redux/actions";

const AddTask = ({ setModalIsOpen }) => {
  const [value, setValue] = useState({});
  const dispatch = useDispatch();

	const handleChange = (e) => {
	    setValue(
	      {
	        ...value,
	        [e.target.name]: e.target.value,
	      },
	    );
	}

	const onSubmit = (e) => {
		dispatch(addTodo(value));
	    setValue({title: '', description: ''});
	    setModalIsOpen()
	}
	    

	return (
		<div className='w-full h-full flex justify-center content-center items-center'>
			<form className='flex flex-col gap-2 p-2'>
				<input
				  type="text"
	        name="title"
	        className='border-black border-2 p-1 rounded-l'
	        placeholder="Todo Title"
	        defaultValue={value?.title}
	        onChange={e => handleChange(e)}/>
	      <input
	        type="text"
	        name="description"
	        className='border-black border-2 p-1 rounded-l'
	        placeholder="Description"
	        defaultValue={value?.description}
	        onChange={e => handleChange(e)}/>
				<button type="reset" className={'border-black border-2'} onClick={e => onSubmit(e)} >Add task</button>
			</form>
		</div>
	)
}


export default AddTask;