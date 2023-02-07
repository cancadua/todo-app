import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { HexColorPicker } from "react-colorful"


const AddTodo = ({ setModalIsOpen }) => {
  const [todo, setTodo] = useState({title: "", description: "", theme: "#FFF000"});
  const dispatch = useDispatch();

    const presetColors = [
    "#CCE8DB",
    "#C1D4E3",
    "#BEB4D6",
    "#FADAE2",
    "#F8B3CA",
    "#CC97C1",
  ]

	const handleChange = (e) => {
	    setTodo(
	      {
	        ...todo,
	        [e.target.name]: e.target.value
	      },
	    );
	}

	const handleThemeChange = (e) => {
	    setTodo(
	      {
	        ...todo,
	        theme: e
	      },
	    );
	}

	const onSubmit = (e) => {
		dispatch(addTodo(todo));
	    setModalIsOpen()
	}


	return (
		<div className='w-full h-full flex justify-center content-center items-center'>
			<form className='flex flex-col gap-2 p-2'>
				<input
				  type="text"
	        name="title"
	        className='border-black border-2 p-1 rounded-l'
	        placeholder="Title"
	        defaultValue={todo?.title}
	        onChange={e => handleChange(e)}/>
	      <input
	        type="text"
	        name="description"
	        className='border-black border-2 p-1 rounded-l'
	        placeholder="Description"
	        defaultValue={todo?.description}
	        onChange={e => handleChange(e)}/>
	      <HexColorPicker 
	        name="theme" 
	        color={todo?.theme} 
	        onChange={e => handleThemeChange(e)}/>
	      <div className="picker__swatches">
          {presetColors.map((presetColor) => (
            <button
            	type="button"
              key={presetColor}
              className="picker__swatch"
              style={{ backgroundColor: presetColor }}
              onClick={() => handleThemeChange(presetColor)}
            />
          ))}
        </div>
				<button type="reset" className={'border-black border-2'} onClick={e => onSubmit(e)} >Add todo</button>
			</form>
		</div>
	)
}


export default AddTodo;