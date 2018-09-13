import { all } from 'redux-saga/effects';
import jokeSagas from './modules/joke/containers/joke-sagas';

export default function* root() {
  yield all([...jokeSagas]);
}
