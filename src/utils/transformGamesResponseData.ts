import type { Game, GameDetails, Platform } from '@/types/game';

type ResponsePlatform = {
	platforms: {
		platform: Platform;
		released_at: string;
	}[];
};

type GameResponse = Omit<Game, 'platforms'> & ResponsePlatform;
type GameDetailsReponse = Omit<GameDetails, 'platforms'> & ResponsePlatform;

export const transformGamesResponseData = (
	response: GameResponse | GameResponse[],
): Game[] | Game => {
	if (Array.isArray(response)) {
		return response.map((game: GameResponse) => ({
			...game,
			platforms: game.platforms.map((p) => ({ ...p.platform })),
		}));
	}

	return {
		...response,
		platforms: response.platforms.map((p) => p.platform),
	};
};

export const transformGameDetailsResponseData = (
	response: GameDetailsReponse | GameDetailsReponse[],
): GameDetails[] | GameDetails => {
	
	if (Array.isArray(response)) {
		return response.map((game: GameDetailsReponse) => ({
			...game,
			platforms: game.platforms.map((p) => ({ ...p.platform })),
		}));
	}
	return {
		...response,
		platforms: response.platforms.map((p) => p.platform),
	};
};

