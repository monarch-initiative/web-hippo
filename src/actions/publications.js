import * as types from '../constants';
import { post } from '../api';

export const fetchPublications = ({ genes, condition }) => {
  const searchQuery = {
    gene: {
      condition: condition,
      symbols: genes
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
