import { StateSchema } from '@/redux/store';

export const selectUser = (state: StateSchema) => state.user; 
export const selectUserIsLoading = (state: StateSchema) => state.user.isLoading;
export const selectUserError =  (state: StateSchema) => state.user.error;
export const selectUserData = (state: StateSchema) => state.user.data;

export const selectUserEmail = (state: StateSchema) => state.user.data?.email;
export const selectUserLibrary = (state: StateSchema) => state.user.data?.library;
export const selectUserId = (state: StateSchema) => state.user.data?.id;
export const selectUserLogin = (state: StateSchema) => state.user.data?.login;

