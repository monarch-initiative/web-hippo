import * as types from '../constants';
import { getAutocomplete } from '../api';

export const fetchAutocompleteList = autocompleteSearchQuery => (dispatch) => {
  if (!autocompleteSearchQuery) return dispatch({ type: types.CLEAR_AUTOCOMPLETE_LIST });

  return dispatch(getAutocomplete(autocompleteSearchQuery, [
    {
      type: types.FETCH_AUTOCOMPLETE_LIST_REQUEST,
      meta: { autocompleteSearchQuery },
    },
    types.FETCH_AUTOCOMPLETE_LIST_SUCCESS,
    types.FETCH_AUTOCOMPLETE_LIST_FAILURE,
  ]));
};

export const setSelectedItems = selectedItems => ({
  type: types.SET_SEARCH_SELECTED_ITEMS,
  payload: selectedItems,
});
