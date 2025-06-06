import { StateSchema } from '@/redux/store';

export const selectGenre = (state: StateSchema) => state.games.genre;
export const selectPage = (state: StateSchema) => state.games.page;
export const selectGames = (state: StateSchema) => state.games.games;
