import { createSelector } from 'reselect';

export const filters = createSelector(
  [state => state.getIn(['filters', 'genes'])],
  items => items
);
