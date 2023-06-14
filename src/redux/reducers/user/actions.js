import {
	SET_LOADING, 
	SET_AUTH, 
	SET_ERROR, 
	SET_USER
} from './userReducer.js';
import UserService from 'API/UserService.js';

export const setIsLoadingAction = (loading) => ({
	type:SET_LOADING, 
	payload: loading,
});

export const setIsAuthAction = (auth) => ({
	type: SET_AUTH,
	payload: auth,
});

export const setErrorAction = (payload) => ({
	type: SET_ERROR,
	payload,
});

export const setUserAction = (user) => ({
	type: SET_USER,
	payload: user,
});