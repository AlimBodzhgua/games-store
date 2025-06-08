export type Game = {
	id: number;
	name: string;	
	released: string;	
	tba: boolean; //'TBA - ToBeAnounced'	
	background_image: string;	
	rating: number;
	rating_top: number;	
	ratings: object;
	ratings_count: number;	
	reviews_text_count: string;	
	added: number;
	added_by_status: object;	
	metacritic: number;	
	playtime: number;
	suggestions_count: number;
	updated: string; //date
	esrb_rating: object;	
	platforms: Platform[];
	genres: Genre[];
	short_screenshots: Screenshot[]; 
}

export type Screenshot = {
	id: number;
	image: string;
}

export interface GameDetails extends Game {
	tags: Tag[];
	developers: Developrs[];
	description: string;
}

export type Developrs = {
	id: number;
	name: string;
}

export type Platform = {
	id: number;
	name: string;
	image_background: string;
}

export type Tag = {
	id: number;
	name: string;
}

export type Genre = {
	id: number;
	name: string;
	img: string;
}

export enum GameActionTypes {
	SET_GAMES = 'SET_GAMES',
	SET_GENRE = 'SET_GENRE',
	SET_PAGE = 'SET_PAGE',
}

interface SetGamesAction {
	type: GameActionTypes.SET_GAMES;
	payload: Game[];
}

interface SetGenreAction {
	type: GameActionTypes.SET_GENRE;
	payload: string | null;
}

interface SetPageAction {
	type: GameActionTypes.SET_PAGE;
	payload: number;
}

export type GameAction = SetPageAction | SetGenreAction | SetGamesAction;