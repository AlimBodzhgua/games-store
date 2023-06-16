import {useState, useEffect} from 'react';
import GamesService from 'API/GamesService';
import {useFetching} from 'hooks/useFetching.js';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal.js';
import ScreenshotsList from './ScreenshotsList.js';

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
		<div>
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