import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_MESSAGE } from './constants';
import { getJokeSuccess, getJokeFail } from './joke-actions';
import callApi from '../../utils/api';

function* handleGetJokeOperation() {
  try {
    // execute GET request using callApi method with param below
    // hint generators *
    const param = {
      endPoint: `/search?term=${payload.text}`,
    };
    // put the result of the GET request in the store
  } catch (err) {
    console.log(err);
    // put the error message in the store
  }
}
export default [takeLatest(ADD_MESSAGE, handleGetJokeOperation)];
