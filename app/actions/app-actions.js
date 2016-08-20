import { SHOW_LOADING_MODAL, HIDE_LOADING_MODAL } from './action-types';

export function showLoadingModal() {
  return { type: SHOW_LOADING_MODAL };
}

export function hideLoadingModal() {
  return { type: HIDE_LOADING_MODAL };
}
