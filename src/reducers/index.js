import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import * as types from '../constants';

const publications = (state = fromJS({}), action) => {
  switch (action.type) {
    case types.FETCH_PUBLICATIONS_SUCCESS:
      return state.merge(fromJS({ ...action.payload }));
    default:
      return state;
  }
};

/**
 * @return collection of reducers
 */
const exampleReducer = combineReducers({
  publications
});

export default exampleReducer;
