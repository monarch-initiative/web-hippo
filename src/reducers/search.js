import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = {
  autocomplete: { genes: [] },
  selectedGenes: [],
  condition: 'OR',
  isLoading: false
};

const filters = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case types.FETCH_GENES_AUTOCOMPLETE_LIST_REQUEST:
      return state.set('isLoading', !action.error);
    case types.FETCH_GENES_AUTOCOMPLETE_LIST_SUCCESS:
      return state
        .setIn(['autocomplete', 'genes'], fromJS(action.payload))
        .set('isLoading', false);
    case types.FETCH_GENES_AUTOCOMPLETE_LIST_FAILURE:
      return state.set('isLoading', false);
    case types.SET_SEARCH_SELECTED_GENES:
      return state.set('selectedGenes', fromJS(action.payload));
    case types.SET_SEARCH_CONDITION:
      return state.set('condition', action.payload);
    case types.CLEAR_GENES_AUTOCOMPLETE_LIST:
      return state.setIn(['autocomplete', 'genes'], fromJS([]));
    default:
      return state;
  }
};

export default filters;
