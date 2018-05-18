import * as types from '../constants';
import { getAutocomplete } from '../api';

export const fetchAutocompleteList = autocompleteSearchQuery => (dispatch) => {
  if (!autocompleteSearchQuery) return dispatch({ type: types.CLEAR_AUTOCOMPLETE_LIST });

  return dispatch(
    getAutocomplete(autocompleteSearchQuery, [
      types.FETCH_AUTOCOMPLETE_LIST_REQUEST,
      types.FETCH_AUTOCOMPLETE_LIST_SUCCESS,
      types.FETCH_AUTOCOMPLETE_LIST_FAILURE,
    ]),
  );
};

export const setSearchItems = searchItems => ({
  type: types.SET_SEARCH_ITEMS,
  payload: searchItems,
});
