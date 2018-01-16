import { createSelector } from 'reselect';

export const autocompleteGenes = createSelector(
  [state => state.getIn(['search', 'autocomplete', 'genes'])],
  items => items
);

export const selectedGenes = createSelector(
  [state => state.getIn(['search', 'selectedGenes'])],
  items => items
);

export const condition = state => state.getIn(['search', 'condition']);
export const isLoading = state => state.getIn(['search', 'isLoading']);
export const searchQuery = state => state.getIn(['search', 'searchQuery']);
