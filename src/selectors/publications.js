import { createSelector } from 'reselect';
const publicationItems = state => state.getIn(['publications', 'items']);

export const getPublicationItems = createSelector(
  [publicationItems],
  items => items
);
export const isLoading = state => state.getIn(['publications', 'isLoading']);
export const isError = state => state.getIn(['publications', 'error']);
export const searchItems = state =>
  state.getIn(['publications', 'searchItems']);
export const queryId = state => state.getIn(['publications', 'queryId']);
