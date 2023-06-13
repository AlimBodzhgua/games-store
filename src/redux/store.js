import {createStore, combineReducers} from 'redux';
import {gamesReducer} from 'redux/reducers/gamesReducer';

const rootReducer = combineReducers({
	games: gamesReducer,
})

export const store = createStore(rootReducer);