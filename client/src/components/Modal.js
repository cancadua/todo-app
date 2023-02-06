import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAddTodoModal } from "../redux/actions";



export const Modal = ({ children }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	return (
		<div>
	        <button onClick={() => setModalIsOpen(true)}>Trigger Modal</button>
	        <Modal 
	        	className='absolute inset-40 bg-white rounded-xl'
	        	overlayClassName='absolute inset-0 bg-black/60 z-30'
	           	isOpen={modalIsOpen}
	           	onRequestClose={() => setModalIsOpen(false)}
	        >
	        </Modal>
	        
	    </div>
		)
	
}