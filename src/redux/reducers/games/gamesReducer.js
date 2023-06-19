const initialState = {
	page: 1,
	genre: null,
	games: [],
}

export const SET_GAMES = 'SET_GAMES';
export const SET_GENRE = 'SET_GENRE';
export const SET_PAGE = 'SET_PAGE';

export const gamesReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_GAMES:
			return {...state, games: action.payload};
		case SET_GENRE:
			return {...state, genre: action.payload, page: 1};
		case SET_PAGE:
			return {...state, page: action.payload};
		default:
			return state; 
	}
}

