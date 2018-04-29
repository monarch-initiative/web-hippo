import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = {
  isLoading: false,
  error: false,
  items: null,
  pagination: null,
  searchItems: null,
  queryId: null,
};
const publications = (state = fromJS(initialState), action) => {
  switch (action.type) {
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
        .set('searchItems', fromJS(action.meta.searchItems))
        .set('queryId', action.payload.queryId);
    case types.FILTER_PUBLICATIONS_SUCCESS:
      return state
        .set('items', fromJS(action.payload.articles))
        .set('pagination', fromJS(action.payload.pagination));
    default:
      return state;
  }
};

export default publications;
