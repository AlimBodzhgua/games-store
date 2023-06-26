import {
	SET_GAMES,
	SET_GENRE,
	SET_PAGE
} from './gamesReducer.js';

export const GamesActions = {
	setGamesAction: (games) => ({type: SET_GAMES, payload: games}),
	setGenreAction: (genre) => ({type: SET_GENRE, payload: genre}),
	setPageAction: (page) => ({type: SET_PAGE, payload:  page}),
}