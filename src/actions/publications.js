import * as types from '../constants';
import { getPublications } from '../api';

export const fetchPublications = searchIds => (dispatch) => {
  dispatch(
    getPublications(1, { searchItems: searchIds }, [
      types.FETCH_PUBLICATIONS_REQUEST,
      types.FETCH_PUBLICATIONS_SUCCESS,
      types.FETCH_PUBLICATIONS_FAILURE,
    ]),
  );
};

export const fetchPublicationsPage = (searchIds, filterIds, queryId, pageNo) => (dispatch) => {
  dispatch(
    getPublications(pageNo, { searchItems: searchIds, filterItems: filterIds, queryId }, [
      types.FETCH_PUBLICATIONS_PAGE_REQUEST,
      types.FETCH_PUBLICATIONS_SUCCESS,
      types.FETCH_PUBLICATIONS_PAGE_FAILURE,
    ]),
  );
};
