import * as types from '../constants';

export const setGeneSelectionInFilters = (geneSymbol, selected) => {
  return {
    type: types.SET_GENE_SELECTION_IN_FILTERS,
    symbol: geneSymbol,
    selected
  };
};
