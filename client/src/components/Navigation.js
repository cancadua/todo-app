import Modal from 'react-modal'
import AddTodo from "./AddTodo"
import { useState } from 'react';



const Navigation = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)

	return (
		<nav className="flex h-16 fixed w-full z-20 top-0 left-0 bg-gradient-to-b to-purple-600 from-purple-400">
			<Modal 
				ariaHideApp={false}
		        className='fixed inset-40 bg-white rounded-xl'
		        overlayClassName='fixed inset-0 bg-black/60 z-30'
		        isOpen={modalIsOpen}
		        onRequestClose={() => setModalIsOpen(false)}
		    >
		    	<AddTodo setModalIsOpen={() => setModalIsOpen(false)}/>
		    </Modal>
		  	<div className="container flex flex-wrap items-center justify-between mx-auto p-2">
			  	<button className="px-2 flex items-center h-full font-black text-white text-xl cursor-pointer rounded-xl">
					Todo App			  	
				</button>

				<button 
					className="px-2 flex items-center h-full 
			  					text-white text-xl cursor-pointer rounded-xl font-black"
			  		onClick={() => setModalIsOpen(true)}>
			  		Add Todo Task
				</button>
				
			  	<div className='flex space-x-4 place-content-around h-full'>
				  	<button className="px-2 flex items-center  
				  					h-full text-white text-xl cursor-pointer rounded-xl font-black">
				  		Log in
				  	</button>
				  	<button className="px-2 flex items-center h-full
				  					text-white text-xl cursor-pointer rounded-xl font-black">
				  		Sign up
			  		</button>
			  	</div>
			  	
		  	</div>
			
		</nav>
	)
}

export default Navigation