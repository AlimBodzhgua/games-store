import {useState, useEffect} from 'react';
import GamesService from 'API/GamesService';
import {useFetching} from 'hooks/useFetching.js';
import PropTypes from 'prop-types';

import classes from './game-screenshots.module.css';

export default function GameScreenshots({id}) {
	const [showScreenshots, setShowScreenshots] = useState(false);
	const [screenshots, setScreenshots] = useState({});
	const [fetchScreenshots, loading, error] = useFetching(async() => {
		const response = await GamesService.getGameScreenshots(id);
		setScreenshots(response.results);
	})

	useEffect(() => {
	}, [])

	const handleClick = (e) => {
		e.preventDefault();
		setShowScreenshots(!showScreenshots);
		fetchScreenshots();
	}

	return (
		<div>
			<button 
				onClick={handleClick}
				className={classes.button}
			>+ Show screenshots</button>
			{showScreenshots && 
				<div className={classes.screenshots}>
					{screenshots.length &&
						screenshots.map(screenshot =>
							<img 
								src={screenshot.image}
								key={screenshot.id}
								className={classes.screenshot}
							/>
						)
					}
				</div>
			}
		</div>
	)
}


GameScreenshots.propTypes = {
	id: PropTypes.number.isRequired,
}