import { combineReducers } from 'redux-immutable';
import { fromJS, List } from 'immutable';
import * as types from '../constants';

/**
 * [exampleData]
 * @param  {[type]} [state=fromJS({})] [description]
 * @param  {[object]} action             [description]
 * @return {[object]}                    [description]
 */
const exampleData = (state = fromJS({}), action) => {
  switch (action.type) {
    case types.EXAMPLE_RESPONSE:
      return state.merge(fromJS(action.data));
    default:
      return state;
  }
};

/**
 * @return collection of reducers
 */
const exampleReducer = combineReducers({
  exampleData
});

export default exampleReducer;
