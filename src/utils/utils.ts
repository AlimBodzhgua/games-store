import type { Game, Platform } from '@/types/game';

export const isUserLoggedIn = () => {
    return localStorage.hasOwnProperty('user');
} 

export const capitalizeFirstLetter = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
}

export const getFirstWord = (str: string) => {
    return str.split(' ')[0].toLowerCase();
}

type ResponsePlatform = {
	platforms: {
		platform: Platform;
		released_at: string;
	}[];
};

type GameResponse = Omit<Game, 'platforms'> & ResponsePlatform;

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

export const removeTags = (str: string) => {
	return str.replace(/<p>|<\/p>|<br\s*\/?>/gi, '');
};