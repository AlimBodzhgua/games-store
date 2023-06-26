import {
	SET_LOADING, 
	SET_AUTH, 
	SET_ERROR, 
	SET_USER,
	ADD_GAME,
	REMOVE_GAME,
	CLEAR_LIBRARY
} from './userReducer.js';
import UserService from 'API/UserService.js';

export const UserActions = {
	setIsLoadingAction: (loading) => ({type:SET_LOADING, payload: loading}),
	setIsAuthAction: (auth) => ({type: SET_AUTH, payload: auth}),
	setErrorAction: (payload) => ({type: SET_ERROR, payload}),
	setUserAction: (user) => ({type: SET_USER, payload: user}),
	addGameAction: (game) => ({type: ADD_GAME, payload: game}),
	removeGameAction: (id) => ({type: REMOVE_GAME, payload: id}),
	clearLibraryAction: () => ({type: CLEAR_LIBRARY}),
}