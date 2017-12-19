import { createSelector } from 'reselect';

export const filters = createSelector(
  [state => state.getIn(['filters', 'genes'])],
  items => items
);

export const filteredPublicationIds = state =>
  filters(state)
    .filter(g => g.get('selected') === true)
    .flatMap(g => g.get('publications'));
