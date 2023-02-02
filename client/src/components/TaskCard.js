const TaskCard = () => {
	const done = false;
	return (
		<div className='p-2 border-white border-2 rounded-xl flex bg-white'>
			<div>
				<h2>
				 Title
				</h2>
				<h2>
				 Description
				</h2>
			</div>
			
			<button>
				{
					done? <span className="text-green-700">✔</span> : <span className="text-red-700">✘</span>
					
				}
			</button>
		</div>
	)
}

export default TaskCard