import { createSelector } from 'reselect';

export const autocompleteItems = createSelector(
  [state => state.getIn(['search', 'autocomplete', 'items'])],
  items => items,
);

export const searchItems = createSelector(
  [state => state.getIn(['search', 'searchItems'])],
  items => items,
);

export const searchIds = createSelector([searchItems], items => items.map(i => i.get('id')));

export const isAutocompleteLoading = state => state.getIn(['search', 'autocomplete', 'isLoading']);
