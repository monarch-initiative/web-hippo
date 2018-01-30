import * as types from '../constants';
import { post } from '../api';

export const fetchPublications = searchItems => {
  return dispatch => {
    dispatch(
      post('/query/v1.0?pageSize=100000&pageNo=1', { searchItems }, [
        types.FETCH_PUBLICATIONS_REQUEST,
        { type: types.FETCH_PUBLICATIONS_SUCCESS, meta: { searchItems } },
        types.FETCH_PUBLICATIONS_FAILURE
      ])
    );
  };
};
