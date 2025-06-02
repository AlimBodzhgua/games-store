import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { useFetching } from '@/hooks/useFetching';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { GamesService } from '@/Services/GamesService';
import { GameDetailsInfo } from '@/components/GameDetailsInfo/GameDetailsInfo';
import { GameScreenshots } from '@/components/GameScreenshots/GameScreenshots';
import type { GameDetails } from '@/types/game';

import classes from './pages.module.css';

export default function GameDetailsPage() {
	const params = useParams();
	const [gameDetails, setGameDetails] = useState<GameDetails | undefined>(undefined);
	const { fetching: fetchGameDetails, isLoading, error} = useFetching(async () => {
		if (params.id) {
			const game = await GamesService.getGameDetails(+params.id);
			setGameDetails(game);
		}
	});

	useEffect(() => {
		fetchGameDetails();
	}, []);

	useEffect(() => {
		if (gameDetails) {
			GamesService.getGameScreenshots(gameDetails.id);
		}
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
					gameDetails && (
						Object.keys(gameDetails!).length && (
							<>
								<GameDetailsInfo game={gameDetails} />
								<GameScreenshots id={gameDetails.id} />
							</>
						)
					)
				)}
			</div>
		</div>
	);
}
