import { useEffect, useState } from 'react';
import { useAction } from './useAction';
import { GamesService } from '@/services/GamesService';
import { useAppSelector } from './redux';

export const useGames = () => {
	const { games, page, genre } = useAppSelector((state) => state.games);
	const [error, setErorr] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { setGamesAction  } = useAction();

	const fetchGames = async () => {
		setIsLoading(true);
		try {
			const games = await GamesService.getGames(page, genre);
			setGamesAction(games);
		} catch (err) {
			setErorr(JSON.stringify(err));
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchGames();
	}, [page, genre])

	return { games, isLoading, error };
};