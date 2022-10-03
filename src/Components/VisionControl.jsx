export const VisionControl = ({ isChecked, SetShowcompleted, cleanTask }) => {
	const handleDeleted = () => {
		if (window.confirm("Are you sure you want to delete")) {
			cleanTask();
		}
	};

	return (
		<div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
			<div className='form-check form-switch'>
				<input
					className='form-check-input'
					checked={isChecked}
					type='checkbox'
					onChange={(e) => SetShowcompleted(e.target.checked)}
				/>
				<label>Show Task Done</label>
			</div>

			<button className='btn btn-danger' onClick={handleDeleted}>
				Clear
			</button>
		</div>
	);
};
