import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from '../hooks/useFetching';
import GamesService from '../API/GamesService';
import GameDetailsInfo from '../components/GameDetailsInfo/GameDetailsInfo.js'

export default function GameDetailsPage() {
	const params = useParams();
	const [gameDetails, setGameDetails] = useState({});
	const [fetchGameDetails, isLoading, error] = useFetching(async() => {
		const response = await GamesService.getGameDetails(params.id);
		setGameDetails(response)
	});

	useEffect(() => {
		fetchGameDetails();
	}, [])

	useEffect(() => {
		GamesService.getGameScreenshots(gameDetails.id)
			.then(data => console.log(data))
			.catch(err => console.log('err:', err));
	}, [gameDetails])

	return (
		<div>
			{Object.keys(gameDetails).length && 
				<GameDetailsInfo 
					image={gameDetails.background_image}
					name={gameDetails.name}
					genres={gameDetails.genres}
					tags={gameDetails.tags}
					platforms={gameDetails.platforms}
					description={gameDetails.description_raw}
				/>
			}
		</div>
	)
}