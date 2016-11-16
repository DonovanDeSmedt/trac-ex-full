import { combineReducers } from 'redux';
import homeReducer from './containers/home/home-reducers';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;
