import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = {
  isLoading: false,
  error: false,
  items: []
};
const publications = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case types.FETCH_PUBLICATIONS_REQUEST:
      return action.error
        ? state.set('isLoading', false).set('error', true)
        : state.set('isLoading', true).set('error', false);
    case types.FETCH_PUBLICATIONS_SUCCESS:
      return state.set('isLoading', false).mergeDeep({ items: action.payload });
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
