import { createSelector } from 'reselect';

export const publicationItems = createSelector(
  [state => state.getIn(['publications', 'items'])],
  items => items,
);
export const isLoading = state => state.getIn(['publications', 'isLoading']);
export const isError = state => state.getIn(['publications', 'error']);
export const queryId = state => state.getIn(['publications', 'query', 'queryId']);
export const pagination = state => state.getIn(['publications', 'pagination']);
export const searchIds = createSelector(
  [state => state.getIn(['publications', 'query', 'searchItems'])],
  items => items && items.map(i => i.get('id')),
);
