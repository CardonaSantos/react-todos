import React, { useState, useEffect } from "react";

const TaskCreator = ({ CreateTask }) => {
	const [NewTaskName, SetNewTask] = useState("");

	//fincion que guarda info en el nav.
	const handleSubmit = (e) => {
		e.preventDefault();
		CreateTask(NewTaskName);

		SetNewTask("");
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='my-2 row'>
				<div className='col-9'>
					<input
						onChange={(e) => SetNewTask(e.target.value)}
						type='text'
						placeholder='Enter a task'
						value={NewTaskName}
						className='form-control'
					/>
				</div>

				<div className='col-3'>
					<button
						onClick={() => NewTaskName}
						className='btn btn-primary btn-sm'
					>
						Save task
					</button>
				</div>
			</form>
		</div>
	);
};

export default TaskCreator;
