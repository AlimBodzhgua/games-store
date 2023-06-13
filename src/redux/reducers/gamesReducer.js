
const initialState = {
	games: []
}


const ADD_GAME = 'ADD_GAME';
const DELETE_GAME = 'DELETE_GAME';
const CLEAR_GAMES = 'CLEAR_GAMES'

export const gamesReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_GAME:
			return {...state};
		case DELETE_GAME:
			return {...state};
		case CLEAR_GAMES:
			return {...state}
		default:
			return state; 
	}
}