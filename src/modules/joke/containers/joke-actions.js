import { createAction } from 'redux-actions';
import * as actionTypes from './constants';

export const getJokeRequest = createAction(actionTypes.GET_JOKE_REQUEST);
export const getJokeSuccess = createAction(actionTypes.GET_JOKE_SUCCESS);
export const getJokeFail = createAction(actionTypes.GET_JOKE_FAIL);

export const addMessage = createAction(actionTypes.ADD_MESSAGE);
