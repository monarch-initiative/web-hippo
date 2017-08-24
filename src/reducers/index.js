import { combineReducers } from 'redux-immutable';
import { fromJS, List } from 'immutable';
import * as types from '../constants';

const exampleData = (state = fromJS({}), action) => {
  switch (action.type) {
    case types.EXAMPLE_RESPONSE:
      return state.merge(fromJS(action.data));
    default:
      return state;
  }
};

const exampleReducer = combineReducers({
  exampleData
});

export default exampleReducer;
