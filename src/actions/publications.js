import * as types from '../constants';
import { getPublications } from '../api';

export const fetchPublications = searchItems => (dispatch) => {
  dispatch(getPublications(1, { searchItems }, [
    types.FETCH_PUBLICATIONS_REQUEST,
    { type: types.FETCH_PUBLICATIONS_SUCCESS, meta: { searchItems } },
    types.FETCH_PUBLICATIONS_FAILURE,
  ]));
};

export const fetchPublicationsPage = (searchItems, filterItems, queryId, pageNo) => (dispatch) => {
  dispatch(getPublications(pageNo, { searchItems, filterItems, queryId }, [
    types.FETCH_PUBLICATIONS_PAGE_REQUEST,
    { type: types.FETCH_PUBLICATIONS_SUCCESS, meta: { searchItems } },
    types.FETCH_PUBLICATIONS_PAGE_FAILURE,
  ]));
};
