const Navigation = () => {
	return (
		<nav className="flex h-16 bg-red-500 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
		  	<div className="container flex flex-wrap items-center justify-between mx-auto">
			  	<a className="flex items-center text-white text-xl font-bold">
					Todo App			  	
				</a>
			  	<div className='flex space-x-4 place-content-around'>
				  	<a className="flex items-center text-white text-xl">
				  		Log in
				  	</a>
				  	<a className="flex items-center text-white text-xl">
				  		Sign up
			  		</a>
			  	</div>
			  	
		  	</div>
		</nav>
	)
}

export default Navigation