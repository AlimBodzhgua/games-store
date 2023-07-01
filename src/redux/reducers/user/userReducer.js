export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_AUTH = 'SET_AUTH';
export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';

export const ADD_GAME = 'ADD_GAME';
export const REMOVE_GAME = 'REMOVE_GAME';
export const CLEAR_LIBRARY = 'CLEAR_LIBRARY';

const initialState = {
	isAuth: false,
	isLoading: false,
	error: '',
	data: null,
}

export const userReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_LOADING:
			return {...state, isLoading: action.payload};
		case SET_ERROR:
			return {...state, isLoading: false, error: action.payload};
		case SET_AUTH:
			return {...state, isLoading: false, isAuth: action.payload};
		case SET_USER:
			return {...state, data: action.payload};
		case CHANGE_LOGIN:
			return {...state, data: {...state.data, login: action.payload}};
		case CHANGE_EMAIL: 
			return {...state, data: {...state.data, email: action.payload}};
		case ADD_GAME:
			return {...state, data: {
					...state.data, 
					library: [...state.data.library, action.payload]
				}};
		case CLEAR_LIBRARY:
			return {...state, data: {...state.data, library: []}};
		case REMOVE_GAME:
			return {...state, data: {...state.data, library: 
				state.data.library.filter(game => game.id != action.payload)
			}};
		default:
			return state;
	}
}