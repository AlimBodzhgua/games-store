import {
	SET_LOADING, 
	SET_AUTH, 
	SET_ERROR, 
	SET_USER,
	ADD_GAME,
	CHANGE_LOGIN,
	CHANGE_EMAIL,
	CHANGE_IMAGE,
	REMOVE_GAME,
	CLEAR_LIBRARY
} from './userReducer';
import { UserService }from '@/API/UserService';

export const UserActions = {
	setIsLoadingAction: (loading) => ({type:SET_LOADING, payload: loading}),
	setIsAuthAction: (auth) => ({type: SET_AUTH, payload: auth}),
	setErrorAction: (payload) => ({type: SET_ERROR, payload}),
	setUserAction: (user) => ({type: SET_USER, payload: user}),
	changeLoginAction: (name) => ({type: CHANGE_LOGIN, payload: name}),
	changeEmailAction: (email) => ({type: CHANGE_EMAIL, payload: email}),
	changeImageAction: (img) => ({type: CHANGE_IMAGE, payload: img}),
	addGameAction: (game) => ({type: ADD_GAME, payload: game}),
	removeGameAction: (id) => ({type: REMOVE_GAME, payload: id}),
	clearLibraryAction: () => ({type: CLEAR_LIBRARY}),


	registerUser: (newUser) => async(dispatch) => {
		try {
			dispatch(UserActions.setIsLoadingAction(true));

			let {data} = await UserService.registerUser(newUser);
			data = {token: data.accessToken, ...data.user};
			localStorage.setItem('user', JSON.stringify(data));
			
			dispatch(UserActions.setUserAction(data));
			dispatch(UserActions.setIsAuthAction(true));
		} catch(error) {
			dispatch(UserActions.setErrorAction(error));
		}
	},

	login: (user) => async(dispatch) => {
		try {
			dispatch(UserActions.setIsLoadingAction(true));

			let { data } = await UserService.login(user);
			data = {token: data.accessToken, ...data.user};
			localStorage.setItem('user', JSON.stringify(data));

			dispatch(UserActions.setUserAction(data));
			dispatch(UserActions.setIsAuthAction(true));
		} catch (error){
			dispatch(UserActions.setErrorAction('Error login user'));
		}
	},

	logout: () => (dispatch) => {
		localStorage.removeItem('user');
		dispatch(UserActions.setIsAuthAction(false));
		dispatch(UserActions.setUserAction(null));
	}
}