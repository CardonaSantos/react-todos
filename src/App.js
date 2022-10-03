import "./App.css";
import React, { useState, useEffect } from "react";
import TaskCreator from "./Components/TaskCreator";
import { TaskTable } from "./Components/TaskTable";
import { VisionControl } from "./Components/VisionControl";

function App() {
	const [taskitems, SetTaskItems] = useState([]);
	const [showCompleted, SetShowcompleted] = useState(false);

	//funcion que agrega task al mapeo. pasamos datos y verifica
	function CreateTask(taskName) {
		if (!taskitems.find((task) => task.name === taskName)) {
			SetTaskItems([...taskitems, { name: taskName, done: false }]);
		}
	}

	//funcion que actualiza las tareas
	const toggleTask = (task) => {
		SetTaskItems(
			taskitems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
		);
	};

	//cuando cargue la app, no borre datos.
	useEffect(() => {
		let datos = localStorage.getItem("task");

		if (datos) {
			SetTaskItems(JSON.parse(datos));
		}
	}, []);

	//Guardar task
	useEffect(() => {
		localStorage.setItem("task", JSON.stringify(taskitems));
	}, [taskitems]);

	//Show y Hide tasks done

	//Deleted Tasks
	const cleanTask = () => {
		SetTaskItems(taskitems.filter((task) => !task.done));
		SetShowcompleted(false);
	};

	return (
		<main className='bg-dark vh-100 text-white'>
			<div className='container p-4 col-md-4 offset-md-4'>
				<h1>React App TODOS</h1>
				<TaskCreator CreateTask={CreateTask} />
				<TaskTable tasks={taskitems} toggleTask={toggleTask} />

				<VisionControl
					isChecked={showCompleted}
					SetShowcompleted={(checked) => SetShowcompleted(checked)}
					cleanTask={cleanTask}
				/>
				{showCompleted && (
					<TaskTable
						tasks={taskitems}
						toggleTask={toggleTask}
						showCompleted={false}
						showCompleted={showCompleted}
					/>
				)}
			</div>
		</main>
	);
}

export default App;
