import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_MESSAGE } from './constants';
import { getJokeSuccess, getJokeFail } from './joke-actions';
import callApi from '../../utils/api';

function* handleGetJokeOperation({ payload }) {
  try {
    const { results } = yield call(callApi, {
      endPoint: `/search?term=${payload.text}`,
    });
    const randomIndex = Math.floor(Math.random() * results.length);
    if (results.length) {
      const newJoke = {
        authorId: 'bot',
        id: 'bot-message',
        parsedDate: '13 Sep 14:54',
        text: results[randomIndex].joke,
        timestamp: new Date().getTime(),
      };
      yield put(getJokeSuccess(newJoke));
    }
  } catch (err) {
    yield put(getJokeFail(err.message));
  }
}
export default [takeLatest(ADD_MESSAGE, handleGetJokeOperation)];
