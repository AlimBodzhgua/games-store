import { type Game, type GameAction, GameActionTypes } from '@/types/game';

export const GamesActions = {
	setGamesAction: (games: Game[]): GameAction => ({
		type: GameActionTypes.SET_GAMES,
		payload: games,
	}),
	setGenreAction: (genre: string | null): GameAction => ({
		type: GameActionTypes.SET_GENRE,
		payload: genre,
	}),
	setPageAction: (page: number): GameAction => ({
		type: GameActionTypes.SET_PAGE,
		payload: page,
	}),
};
