import {UserActions} from './user/actions.js';
import {GamesActions} from './games/actions.js'


export const actions = {
	...UserActions,
	...GamesActions,
}