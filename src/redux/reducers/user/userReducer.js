export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_AUTH = 'SET_AUTH';

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
			return {...state, isLoading: false, isAuth: action.payload}
		case SET_USER:
			return {...state, data: action.payload};
		default:
			return state;
	}
}