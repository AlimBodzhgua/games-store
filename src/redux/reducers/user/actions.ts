import { UserService }from '@/Services/UserService';
import { USER_LOCALSTORAGE_KEY } from '@/constants/localsrorage';
import type { Game } from '@/types/game';
import {
	type LoginUserDTO,
	type RegisterUserDTO,
	type User,
	type UserAction,
	UserActionTypes,
} from '@/types/user';
import type { Dispatch } from 'react';

export const UserActions = {
	setIsLoadingAction: (loading: boolean): UserAction => ({
		type: UserActionTypes.SET_LOADING,
		payload: loading,
	}),
	setIsAuthAction: (auth: boolean): UserAction => ({
		type: UserActionTypes.SET_AUTH,
		payload: auth,
	}),
	setErrorAction: (error: string): UserAction => ({
		type: UserActionTypes.SET_ERROR,
		payload: error,
	}),
	setUserAction: (user: User | null): UserAction => ({
		type: UserActionTypes.SET_USER,
		payload: user,
	}),
	changeLoginAction: (name: string): UserAction => ({
		type: UserActionTypes.CHANGE_LOGIN,
		payload: name,
	}),
	changeEmailAction: (email: string): UserAction => ({
		type: UserActionTypes.CHANGE_EMAIL,
		payload: email,
	}),
	changeImageAction: (img: string): UserAction => ({
		type: UserActionTypes.CHANGE_IMAGE,
		payload: img,
	}),
	addGameAction: (game: Game): UserAction => ({
		type: UserActionTypes.ADD_GAME,
		payload: game,
	}),
	removeGameAction: (id: number): UserAction => ({
		type: UserActionTypes.REMOVE_GAME,
		payload: id,
	}),
	clearLibraryAction: (): UserAction => ({ type: UserActionTypes.CLEAR_LIBRARY }),

	registerUser: (data: RegisterUserDTO) => async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch(UserActions.setIsLoadingAction(true));

			const newUser = await UserService.register(data);
			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(newUser));

			dispatch(UserActions.setUserAction(newUser));
			dispatch(UserActions.setIsAuthAction(true));
		} catch (error) {
			dispatch(UserActions.setErrorAction(`Error register user ${JSON.stringify(error)}`));
		}
	},

	login: (data: LoginUserDTO) => async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch(UserActions.setIsLoadingAction(true));

			const user = await UserService.login(data);

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));

			dispatch(UserActions.setUserAction(user));
			dispatch(UserActions.setIsAuthAction(true));
		} catch (error) {
			dispatch(UserActions.setErrorAction(`Error login user ${JSON.stringify(error)}`));
		}
	},

	logout: () => (dispatch: Dispatch<UserAction>) => {
		localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		dispatch(UserActions.setIsAuthAction(false));
		dispatch(UserActions.setUserAction(null));
	},
};