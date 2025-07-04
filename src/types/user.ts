import { Game } from './game';

export type User = {
	id: number;
	email: string;
	token: string;
	login: string;
	img: string;
	library: Game[];
}

export type LoginUserDTO = Pick<User, 'email'> & { password: string };
export type RegisterUserDTO = Omit<User, 'id' | 'token'>;

export enum UserActionTypes {
	SET_USER = 'SET_USER',
	SET_AUTH = 'SET_AUTH',
	SET_ERROR = 'SET_ERROR',
	SET_LOADING = 'SET_LOADING',

	CHANGE_LOGIN = 'CHANGE_LOGIN',
	CHANGE_EMAIL = 'CHANGE_EMAIL',
	CHANGE_IMAGE = 'CHANGE_IMAGE',

	ADD_GAME = 'ADD_GAME',
	REMOVE_GAME = 'REMOVE_GAME',
	CLEAR_LIBRARY = 'CLEAR_LIBRARY',
}

interface SetLoadingAction {
	type: UserActionTypes.SET_LOADING;
	payload: boolean;
}

interface SetErrorAction {
	type: UserActionTypes.SET_ERROR;
	payload: string;
}

interface SetAuthAciton {
	type: UserActionTypes.SET_AUTH;
	payload: boolean;
}

interface SetUserAction {
	type: UserActionTypes.SET_USER;
	payload: User | null;
}

interface ChangeLoginAction {
	type: UserActionTypes.CHANGE_LOGIN;
	payload: string;
}

interface ChangeEmailAction {
	type: UserActionTypes.CHANGE_EMAIL;
	payload: string;
}

interface ChangeImageAction {
	type: UserActionTypes.CHANGE_IMAGE;
	payload: string;
}

interface ClearLibraryAction {
	type: UserActionTypes.CLEAR_LIBRARY;
}

interface AddGameAction {
	type: UserActionTypes.ADD_GAME;
	payload: Game;
}

interface RemoveGameAction {
	type: UserActionTypes.REMOVE_GAME;
	payload: number; 
}

export type UserAction =
	| SetLoadingAction
	| SetErrorAction
	| SetAuthAciton
	| SetUserAction
	| ChangeLoginAction
	| ChangeEmailAction
	| ChangeImageAction
	| ClearLibraryAction
	| AddGameAction
	| RemoveGameAction;