import {useState, useEffect} from 'react';
import {useFetching} from 'hooks/useFetching.js';
import ScreenshotsList from './ScreenshotsList.js';
import Modal from 'components/Modal/Modal.js';
import GamesService from 'API/GamesService';
import PropTypes from 'prop-types';

import classes from './screenshots.module.css';

export default function GameScreenshots({id}) {
	const [showScreenshots, setShowScreenshots] = useState(false);
	const [screenshots, setScreenshots] = useState([]);
	const [fetchScreenshots, loading, error] = useFetching(async() => {
		const response = await GamesService.getGameScreenshots(id);
		setScreenshots(response.results);
	})

	const handleClick = (e) => {
		e.preventDefault();
		setShowScreenshots(!showScreenshots);
		fetchScreenshots();
	}

	return (
		<div className={classes.screenshots__section}>
			<button onClick={handleClick} className={classes.button}>
				{showScreenshots ? '- ' : '+ '} Show screenshots
			</button>
			{showScreenshots && 
				<div className={classes.screenshots}>
					{screenshots.length &&
						<ScreenshotsList screenshots={screenshots}/>
					}
				</div>
			}
		</div>
	)
}


GameScreenshots.propTypes = {
	id: PropTypes.number.isRequired,
}