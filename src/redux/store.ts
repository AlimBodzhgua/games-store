import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { gamesReducer, GamesState } from '@/redux/reducers/games/gamesReducer';
import { userReducer, UserState } from '@/redux/reducers/user/userReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	games: gamesReducer,
	user: userReducer,
});

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export interface StateSchema {
	games: GamesState;
	user: UserState;
}