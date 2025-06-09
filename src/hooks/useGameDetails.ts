import { GamesService } from '@/services/GamesService';
import { GameDetails } from '@/types/game';
import { useEffect, useState } from 'react';

export const useGameDetails = (gameId: number) => {
	const [gameDetails, setGameDetails] = useState<GameDetails | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchGameDetails = async () => {
		setIsLoading(true);
		try {
			const gameDetails = await GamesService.getGameDetails(gameId);
			setGameDetails(gameDetails);
		} catch (err) {
			setError(JSON.stringify(err));
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchGameDetails();
	}, []);

	return { gameDetails, isLoading, error };
}