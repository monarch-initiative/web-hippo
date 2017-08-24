import { combineReducers } from 'redux-immutable';
import { fromJS, List } from 'immutable';
import * as types from '../constants';

export const getExampleData = state => {
  return state.get('exampleData');
};
