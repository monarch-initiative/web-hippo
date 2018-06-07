import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = fromJS({
  isLoading: false,
  error: false,
  items: [],
  selectedIds: [],
});

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_STORE:
    case types.FETCH_PUBLICATIONS_REQUEST:
      return initialState;
    case types.FILTER_PUBLICATIONS_REQUEST:
    case types.FILTER_PUBLICATIONS_FAILURE:
      return action.error
        ? state.set('isLoading', false).set('error', true)
        : state.set('isLoading', true).set('error', false);
    case types.FILTER_PUBLICATIONS_SUCCESS:
      return state
        .set('selectedIds', fromJS(action.meta.filterIds))
        .set('items', fromJS(action.payload.filters))
        .set('isLoading', false);
    case types.FETCH_PUBLICATIONS_SUCCESS:
      return state.set('items', fromJS(action.payload.filters));
    default:
      return state;
  }
};

export default filters;
