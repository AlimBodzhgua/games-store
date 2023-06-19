import {
	SET_GAMES,
	SET_GENRE,
	SET_PAGE
} from './gamesReducer.js';

export const setGamesAction = (games) => ({type: SET_GAMES, payload: games})
export const setGenreAction = (genre) => ({type: SET_GENRE, payload: genre})
export const setPageAction = (page) => ({type: SET_PAGE, payload:  page});