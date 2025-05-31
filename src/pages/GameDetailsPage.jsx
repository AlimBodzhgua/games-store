import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '@/hooks/useFetching';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { GamesService } from '@/API/GamesService';
import { GameDetailsInfo } from '@/components/GameDetailsInfo/GameDetailsInfo';
import { GameScreenshots } from '@/components/GameScreenshots/GameScreenshots';
import { RotatingLines } from 'react-loader-spinner';

import classes from './pages.module.css';

export default function GameDetailsPage() {
	const params = useParams();
	const [gameDetails, setGameDetails] = useState({});
	const [fetchGameDetails, isLoading, error] = useFetching(async () => {
		const response = await GamesService.getGameDetails(params.id);
		setGameDetails(response);
	});

	useEffect(() => {
		fetchGameDetails();
	}, []);

	useEffect(() => {
		GamesService.getGameScreenshots(gameDetails.id);
	}, [gameDetails]);

	return (
		<div className={`${classes.page} ${classes.pageFlex}`}>
			<Sidebar />
			<div className={classes.page__details}>
				{isLoading ? (
					<RotatingLines
						strokeColor='grey'
						strokeWidth='5'
						animationDuration='0.75'
						width='55'
						visible={true}
					/>
				) : (
					Object.keys(gameDetails).length && (
						<>
							<GameDetailsInfo
								image={gameDetails.background_image}
								name={gameDetails.name}
								genres={gameDetails.genres}
								tags={gameDetails.tags}
								platforms={gameDetails.platforms}
								description={gameDetails.description_raw}
							/>
							<GameScreenshots id={gameDetails.id} />
						</>
					)
				)}
			</div>
		</div>
	);
}
