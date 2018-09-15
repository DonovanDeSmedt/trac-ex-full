import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as jokeActions from './constants';

const data = handleActions(
  {
    [jokeActions.ADD_MESSAGE]: (state, { payload }) => [...state, payload],
  },
  [],
);

export default combineReducers({
  data,
});
