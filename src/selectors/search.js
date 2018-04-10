import { createSelector } from 'reselect';

export const autocompleteItems = createSelector(
  [state => state.getIn(['search', 'autocomplete', 'items'])],
  items => items,
);

export const selectedItems = createSelector(
  [state => state.getIn(['search', 'selectedItems'])],
  items => items,
);

export const isAutocompleteLoading = state => state.getIn(['search', 'autocomplete', 'isLoading']);
