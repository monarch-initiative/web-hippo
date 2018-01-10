import * as types from '../constants';
import { post } from '../api';
import { splitSearchQuery } from '../helpers';

export const fetchPublications = ({ genes, condition }) => {
  const searchQuery = {
    gene: {
      condition: condition,
      symbols: splitSearchQuery(genes)
    }
  };
  return dispatch => {
    dispatch(
      post('/query?pageSize=100000&pageNo=1', { ...searchQuery }, [
        types.FETCH_PUBLICATIONS_REQUEST,
        { type: types.FETCH_PUBLICATIONS_SUCCESS, meta: { searchQuery } },
        types.FETCH_PUBLICATIONS_FAILURE
      ])
    );
  };
};
