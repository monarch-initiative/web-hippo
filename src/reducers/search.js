import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = fromJS({
  autocomplete: { items: [], isLoading: false },
  searchItems: [],
});

const filters = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_STORE:
      return initialState;
    case types.FETCH_AUTOCOMPLETE_LIST_REQUEST:
      return state.setIn(['autocomplete', 'isLoading'], !action.error);
    case types.FETCH_AUTOCOMPLETE_LIST_SUCCESS:
      return state
        .setIn(['autocomplete', 'items'], fromJS(action.payload))
        .setIn(['autocomplete', 'isLoading'], false);
    case types.FETCH_AUTOCOMPLETE_LIST_FAILURE:
      return state.setIn(['autocomplete', 'isLoading'], false);
    case types.FILTER_PUBLICATIONS_SUCCESS:
    case types.FETCH_PUBLICATIONS_SUCCESS:
      return state.set('searchItems', fromJS(action.payload.query.searchItems));
    case types.SET_SEARCH_ITEMS:
      return state
        .set('searchItems', fromJS(action.payload))
        .setIn(['autocomplete', 'items'], fromJS([]));
    case types.CLEAR_AUTOCOMPLETE_LIST:
      return state.setIn(['autocomplete', 'items'], fromJS([]));
    default:
      return state;
  }
};

export default filters;
