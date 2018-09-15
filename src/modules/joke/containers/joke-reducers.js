import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import ADD_MESSAGE from './constants';

const data = handleActions(
  {
    // do somehting when action with type ADD_MESSAGE is dispatched
  },
  [],
);

export default combineReducers({
  data,
});
