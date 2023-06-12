import {useState} from 'react';
import GamesService from '../../API/GamesService';
import PropTypes from 'prop-types';

export default function GameScreenshots({id}) {
	const [showScreenshots, setShowScreenshots] = useState(false);
	const [screenshots, setScreenshots] = useState({});
	const [fetchScreenshots, loading, error] = useFetching(async() => {
		const response = await GamesService.getGameScreenshots(id);
		setScreenshots(response);
		console.log(response);
	})


	return (
		<div>
			GameScreenshots
		</div>
	)
}


GameScreenshots.propTypes = {
	id: PropTypes.number.isRequired;
}