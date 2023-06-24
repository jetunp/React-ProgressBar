import { useState } from 'react';
import ProgressBar from './ProgressBar';

const AddProgressBarButton = () => {
	const [progressBars, setProgressBars] = useState([]);

	const addProgressBar = () => {
		const newProgressBars = [...progressBars];
		newProgressBars.push(<ProgressBar />);
		setProgressBars(newProgressBars);
	};

	return (
		<div>
			<button
				type='button'
				className='btn btn-primary'
				onClick={addProgressBar}
			>
				Add Progress Bar
			</button>
			{progressBars.map((progressBar) => progressBar)}
		</div>
	);
};

export default AddProgressBarButton;
