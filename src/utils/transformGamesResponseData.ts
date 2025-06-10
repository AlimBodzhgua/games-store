import type { Game, GameDetails, Platform, Store } from '@/types/game';

type ResponsePlatform = {
	platforms: {
		platform: Platform;
		released_at: string;
	}[];
};

type ResponseStore = {
	stores: {
		index: number;
		store: Store;
	}[]
}

type GameResponse = Omit<Game, 'platforms' | 'stores'> &
	ResponsePlatform &
	ResponseStore;

type GameDetailsResponse = Omit<GameDetails, 'platforms' | 'stores'> &
	ResponsePlatform &
	ResponseStore;


export const transformGamesResponseData = (
	response: GameResponse | GameResponse[],
): Game[] | Game => {
	if (Array.isArray(response)) {
		return response.map((game: GameResponse) => ({
			...game,
			platforms: game.platforms.map((p) => ({ ...p.platform })),
			stores: game.stores.map((s) => ({ ...s.store })),
		}));
	}

	return {
		...response,
		platforms: response.platforms.map((p) => p.platform),
		stores: response.stores.map((s) => s.store),
	};
};

export const transformGameDetailsResponseData = (
	response: GameDetailsResponse | GameDetailsResponse[],
): GameDetails[] | GameDetails => {
	if (Array.isArray(response)) {
		return response.map((game: GameDetailsResponse) => ({
			...game,
			platforms: game.platforms.map((p) => ({ ...p.platform })),
			stores: game.stores.map((s) => ({ ...s.store })),
		}));
	}

	return {
		...response,
		platforms: response.platforms.map((p) => p.platform),
		stores: response.stores.map((s) => s.store),
	};
};

