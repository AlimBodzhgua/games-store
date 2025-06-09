import { GamesService } from '@/services/GamesService';
import { Screenshot } from '@/types/game';
import { useState } from 'react';

export const useGameScreenshots = (id: number) => {
	const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchScreenshots = async () => {
		setIsLoading(true);
		try {
			const screenshots = await GamesService.getGameScreenshots(id); 
			setScreenshots(screenshots);
		} catch (err) {
			setError(JSON.stringify(err));
		} finally {
			setIsLoading(false);
		}
	}

	return { fetchScreenshots, screenshots, isLoading, error };
}