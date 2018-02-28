import { createSelector } from 'reselect';

export const filterItems = createSelector(
  [state => state.getIn(['filters', 'items'])],
  items => items,
);
export const selectedFilterItems = createSelector(
  [state => state.getIn(['filters', 'selectedItems'])],
  items => items,
);
export const isLoading = state => state.getIn(['filters', 'isLoading']);
export const isError = state => state.getIn(['filters', 'error']);
