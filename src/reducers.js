import { combineReducers } from 'redux';
import homeReducer from './modules/home/containers/home-reducers';
import jokeReducer from './modules/joke/containers/joke-reducers';

const rootReducer = combineReducers({
  home: homeReducer,
  joke: jokeReducer,
});

export default rootReducer;
