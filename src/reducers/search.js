import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = {
  autocomplete: { items: [], searchQuery: '', isLoading: false },
  selectedItems: []
};

const filters = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case types.FETCH_AUTOCOMPLETE_LIST_REQUEST:
      return state
        .setIn(['autocomplete', 'isLoading'], !action.error)
        .setIn(
          ['autocomplete', 'searchQuery'],
          action.meta.autocompleteSearchQuery
        );
    case types.FETCH_AUTOCOMPLETE_LIST_SUCCESS:
      return state
        .setIn(['autocomplete', 'items'], fromJS(action.payload))
        .setIn(['autocomplete', 'isLoading'], false);
    case types.FETCH_AUTOCOMPLETE_LIST_FAILURE:
      return state.setIn(['autocomplete', 'isLoading'], false);
    case types.SET_SEARCH_SELECTED_ITEMS:
      return state
        .set('selectedItems', fromJS(action.payload))
        .setIn(['autocomplete', 'searchQuery'], '')
        .setIn(['autocomplete', 'items'], fromJS([]));
    case types.CLEAR_AUTOCOMPLETE_LIST:
      return state
        .setIn(['autocomplete', 'items'], fromJS([]))
        .setIn(['autocomplete', 'searchQuery'], '');
    default:
      return state;
  }
};

export default filters;
