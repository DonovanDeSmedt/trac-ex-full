import { combineReducers } from 'redux';
import jokeReducer from './modules/joke/containers/joke-reducers';

const rootReducer = combineReducers({
  joke: jokeReducer,
});

export default rootReducer;
