import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
	//condicional donde mostraremos las hechas y faltantes
	const TaskTableRows = (doneValue) => {
		return tasks
			.filter((task) => task.done === doneValue)
			.map((task) => (
				<TaskRow task={task} key={task.name} toggleTask={toggleTask} />
			));
	};

	return (
		<table className='table table-dark table-striped table-bordered border-secondary'>
			<thead>
				<tr className='table-success'>
					<th>Task</th>
				</tr>
			</thead>
			<tbody>{TaskTableRows(showCompleted)}</tbody>
		</table>
	);
};
