import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as jokeActions from './constants';

const data = handleActions(
  {
    [jokeActions.GET_JOKE_SUCCESS]: (state, { payload }) => [...state, payload],
    [jokeActions.ADD_MESSAGE]: (state, { payload }) => [...state, payload],
  },
  [],
);
const isLoading = handleActions(
  {
    [jokeActions.GET_JOKE_REQUEST]: () => true,
    [jokeActions.ADD_MESSAGE]: () => true,
    [jokeActions.GET_JOKE_FAIL]: () => false,
    [jokeActions.GET_JOKE_SUCCESS]: () => false,
  },
  false,
);
const error = handleActions(
  {
    [jokeActions.GET_JOKE_FAIL]: (state, { payload }) => payload,
  },
  '',
);

export default combineReducers({
  data,
  isLoading,
  error,
});
