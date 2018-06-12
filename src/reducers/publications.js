import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = fromJS({
  isLoading: false,
  error: false,
  items: null,
  pagination: null,
  query: null,
});
const publications = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_STORE:
      return initialState;
    case types.FETCH_PUBLICATIONS_REQUEST:
    case types.FETCH_PUBLICATIONS_FAILURE:
      return action.error
        ? state.set('isLoading', false).set('error', true)
        : state.set('isLoading', true).set('error', false);
    case types.FETCH_PUBLICATIONS_SUCCESS:
      return state
        .set('isLoading', false)
        .set('items', fromJS(action.payload.articles))
        .set('pagination', fromJS(action.payload.pagination))
        .set('query', fromJS(action.payload.query));
    case types.FILTER_PUBLICATIONS_SUCCESS:
      return state
        .set('items', fromJS(action.payload.articles))
        .set('pagination', fromJS(action.payload.pagination));
    default:
      return state;
  }
};

export default publications;
