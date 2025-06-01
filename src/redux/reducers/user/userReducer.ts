import { UserActionTypes, type UserAction, type User } from '@/types/user';

export type UserState = {
	isAuth: boolean;
	isLoading: boolean;
	error: string;
	data: User | null; 
}

const initialState: UserState = {
	isAuth: false,
	isLoading: false,
	error: '',
	data: null,
}

export const userReducer = (state = initialState, action: UserAction) => {
	switch (action.type) {
		case UserActionTypes.SET_LOADING:
			return { ...state, isLoading: action.payload };
		case UserActionTypes.SET_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		case UserActionTypes.SET_AUTH:
			return { ...state, isLoading: false, isAuth: action.payload };
		case UserActionTypes.SET_USER:
			return { ...state, data: action.payload };
		case UserActionTypes.CHANGE_LOGIN:
			return { ...state, data: { ...state.data, login: action.payload } };
		case UserActionTypes.CHANGE_EMAIL:
			return { ...state, data: { ...state.data, email: action.payload } };
		case UserActionTypes.CHANGE_IMAGE:
			return { ...state, data: { ...state.data, img: action.payload } };
		case UserActionTypes.ADD_GAME:
			() => {
				if (state.data) {
					return {
						...state,
						data: {
							...state.data,
							library: [...state.data?.library, action.payload],
						},
					};
				}
			};
		case UserActionTypes.REMOVE_GAME:
			() => {
				if (state.data) {
					return {
						...state,
						data: {
							...state.data,
							library: state.data.library.filter(
								(game) => game.id != action.payload,
							),
						},
					};
				}
			};
		case UserActionTypes.CLEAR_LIBRARY:
			return { ...state, data: { ...state.data, library: [] } };
		default:
			return state;
	}
}