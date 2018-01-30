import * as types from '../constants';
import { get } from '../api';

export const fetchAutocompleteList = autocompleteSearchQuery => {
  return dispatch => {
    if (!autocompleteSearchQuery)
      return dispatch({ type: types.CLEAR_AUTOCOMPLETE_LIST });

    return dispatch(
      get(
        `/query/autocomplete/beta/${encodeURIComponent(
          autocompleteSearchQuery
        )}`,
        [
          {
            type: types.FETCH_AUTOCOMPLETE_LIST_REQUEST,
            meta: { autocompleteSearchQuery }
          },
          types.FETCH_AUTOCOMPLETE_LIST_SUCCESS,
          types.FETCH_AUTOCOMPLETE_LIST_FAILURE
        ]
      )
    );
  };
};

export const setSelectedItems = selectedItems => ({
  type: types.SET_SEARCH_SELECTED_ITEMS,
  payload: selectedItems
});
