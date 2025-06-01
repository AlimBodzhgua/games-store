import { GameActionTypes, type Game, type GameAction } from '@/types/game';

export interface GamesState {
	page: number;
	genre?: string;
	games: Game[];
}

const initialState: GamesState = {
	page: 1,
	genre: undefined,
	games: [],
}

export const gamesReducer = (state = initialState, action: GameAction) => {
	switch(action.type) {
		case GameActionTypes.SET_GAMES:
			return {...state, games: action.payload};
		case GameActionTypes.SET_GENRE:
			return {...state, genre: action.payload, page: 1};
		case GameActionTypes.SET_PAGE:
			return {...state, page: action.payload};
		default:
			return state; 
	}
}

