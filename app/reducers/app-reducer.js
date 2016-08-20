import { SHOW_LOADING_MODAL, HIDE_LOADING_MODAL } from '../actions/action-types';

function loadingReducer(state = false, action) {
  switch (action.type) {
    case SHOW_LOADING_MODAL:
      return true;
    case HIDE_LOADING_MODAL:
      return false;
    default:
      return state;
  }
}

export default loadingReducer;
