import { createSelector } from 'reselect';

export const filterItems = createSelector(
  [state => state.getIn(['filters', 'items'])],
  items => items,
);
export const selectedFilterIds = createSelector(
  [state => state.getIn(['filters', 'selectedIds'])],
  items => items,
);

export const isLoading = state => state.getIn(['filters', 'isLoading']);
export const isError = state => state.getIn(['filters', 'error']);
