import * as types from '../constants';
import { getPublications } from '../api';

export const setGeneSelectionInFilters = (geneSymbol, selected) => ({
  type: types.SET_GENE_SELECTION_IN_FILTERS,
  symbol: geneSymbol,
  selected,
});

export const filterPublications = ({ searchIds, queryId, filterIds }) => (dispatch) => {
  dispatch(
    getPublications(1, { searchItems: searchIds, queryId, filterItems: filterIds }, [
      types.FILTER_PUBLICATIONS_REQUEST,
      { type: types.FILTER_PUBLICATIONS_SUCCESS, meta: { filterIds } },
      types.FILTER_PUBLICATIONS_FAILURE,
    ]),
  );
};
