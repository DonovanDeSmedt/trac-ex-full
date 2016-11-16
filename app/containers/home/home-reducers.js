import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actionTypes from './constants';

const items = handleActions({
  [actionTypes.GET_ITEMS]: (state, action) => action.payload,
}, []);

const selectedIds = handleActions({
  [actionTypes.TOGGLE_ITEM]: (state, action) => {
    if (state.includes(action.payload)) {
      return state.filter(itemId => itemId !== action.payload);
    }
    return [...state, action.payload];
  },
}, []);

export default combineReducers({
  items,
  selectedIds,
});
