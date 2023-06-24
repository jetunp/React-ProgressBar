import { useState, useEffect } from 'react';

const ProgressBar = () => {
	// progress state
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			//check if the progress state is below the max value of 100% increment by 20%
			//else just clear interval
			if (progress < 100) {
				setProgress(progress + 20);
			} else {
				clearInterval(interval);
			}
		}, 1000);
		//When the component unmounts or the progress reaches 100, we clear the interval to stop the animation.
		return () => {
			clearInterval(interval);
		};
	}, [progress]);

	//As there is not much of styling required I will use inline styling
	const ParentDiv = {
		width: '400px',
		height: '40px',
		backgroundColor: 'blue',
		margin: 'auto',
		position: 'relative',
		padding: '10px',
		borderRadius: '50px',
	};

	const ChildDiv = {
		width: `${progress}%`,
		height: '100%',
		backgroundColor: 'yellow',
		transition: 'width 0.5s ease',
		borderRadius: 'inherit',
	};

	const ProgressStyles = {
		padding: '50px',
		margin: 'auto',
		color: 'black',
		fontWeight: 'bold',
	};

	return (
		<>
			<div style={ParentDiv}>
				<div style={ChildDiv}></div>
			</div>
			<span style={ProgressStyles}>{`${progress}%`}</span>
		</>
	);
};

export default ProgressBar;
