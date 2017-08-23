import { combineReducers } from 'redux-immutable';
import { fromJS, List } from 'immutable';
import * as types from '../constants';

const exampleData = (state = fromJS({}), action) => {
  switch (action.type) {
    case types.FETCH_RESPONSE_SUCCESS:
      return state.merge(fromJS(action.data));
    default:
      return state;
  }
};

const exampleReducer = combineReducers({
  exampleData
});

export const getExampleData = state => {
  return state.get('exampleData');
};

export default exampleReducer;
