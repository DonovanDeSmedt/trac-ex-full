import { createAction } from 'redux-actions';
import * as actionTypes from './constants';

const addMessage = createAction(actionTypes.ADD_MESSAGE);
export default addMessage;
