import { UserActions } from './user/actions';
import { GamesActions } from './games/actions'


export const actions = {
	...UserActions,
	...GamesActions,
}