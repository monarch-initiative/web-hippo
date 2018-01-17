import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = {
  autocomplete: { genes: [], searchQuery: '', isLoading: false },
  selectedGenes: [],
  condition: 'OR'
};

const filters = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case types.FETCH_GENES_AUTOCOMPLETE_LIST_REQUEST:
      return state
        .setIn(['autocomplete', 'isLoading'], !action.error)
        .setIn(
          ['autocomplete', 'searchQuery'],
          action.meta.autocompleteSearchQuery
        );
    case types.FETCH_GENES_AUTOCOMPLETE_LIST_SUCCESS:
      return state
        .setIn(['autocomplete', 'genes'], fromJS(action.payload))
        .setIn(['autocomplete', 'isLoading'], false);
    case types.FETCH_GENES_AUTOCOMPLETE_LIST_FAILURE:
      return state.setIn(['autocomplete', 'isLoading'], false);
    case types.SET_SEARCH_SELECTED_GENES:
      return state
        .set('selectedGenes', fromJS(action.payload))
        .setIn(['autocomplete', 'searchQuery'], '')
        .setIn(['autocomplete', 'genes'], fromJS([]));
    case types.SET_SEARCH_CONDITION:
      return state.set('condition', action.payload);
    case types.CLEAR_GENES_AUTOCOMPLETE_LIST:
      return state
        .setIn(['autocomplete', 'genes'], fromJS([]))
        .setIn(['autocomplete', 'searchQuery'], '');
    default:
      return state;
  }
};

export default filters;
