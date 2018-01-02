import { createSelector } from 'reselect';
import * as filterSelectors from './filters';
const publicationItems = state => state.getIn(['publications', 'items']);

export const getPublicationItems = createSelector(
  [publicationItems],
  items => items
);

export const filteredPublicationItems = state => {
  const publications = getPublicationItems(state);
  if (!publications) return publications;

  const filteredPubIds = filterSelectors.filteredPublicationIds(state);
  return publications.filter(
    pub =>
      filteredPubIds.count() === 0 ||
      filteredPubIds.indexOf(pub.get('pmid')) > -1
  );
};

export const isLoading = state => state.getIn(['publications', 'isLoading']);
export const isError = state => state.getIn(['publications', 'error']);
export const searchQuery = state =>
  state.getIn(['publications', 'searchQuery']);
