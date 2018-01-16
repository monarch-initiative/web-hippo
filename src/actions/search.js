import * as types from '../constants';
import { get } from '../api';

export const fetchGenesAutocompleteList = autocompleteSearchQuery => {
  return dispatch => {
    if (!autocompleteSearchQuery)
      return dispatch({ type: types.CLEAR_GENES_AUTOCOMPLETE_LIST });

    return dispatch(
      get(
        `/query/autocomplete/${encodeURIComponent(autocompleteSearchQuery)}`,
        [
          {
            type: types.FETCH_GENES_AUTOCOMPLETE_LIST_REQUEST,
            meta: { autocompleteSearchQuery }
          },
          types.FETCH_GENES_AUTOCOMPLETE_LIST_SUCCESS,
          types.FETCH_GENES_AUTOCOMPLETE_LIST_FAILURE
        ]
      )
    );
  };
};

export const setSelectedGenes = selectedGenes => ({
  type: types.SET_SEARCH_SELECTED_GENES,
  payload: selectedGenes
});

export const setSearchCondition = condition => ({
  type: types.SET_SEARCH_CONDITION,
  payload: condition
});
