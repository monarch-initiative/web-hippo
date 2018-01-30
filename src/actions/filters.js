import * as types from '../constants';
import { post } from '../api';

export const setGeneSelectionInFilters = (geneSymbol, selected) => {
  return {
    type: types.SET_GENE_SELECTION_IN_FILTERS,
    symbol: geneSymbol,
    selected
  };
};

export const filterPublications = ({ searchItems, queryId, filterItems }) => {
  return dispatch => {
    dispatch(
      post(
        '/query/v1.0?pageSize=100000&pageNo=1',
        { searchItems, queryId, filterItems },
        [
          types.FILTER_PUBLICATIONS_REQUEST,
          { type: types.FILTER_PUBLICATIONS_SUCCESS, meta: { filterItems } },
          types.FILTER_PUBLICATIONS_FAILURE
        ]
      )
    );
  };
};
