import * as types from '../constants';
import { getPublications } from '../api';

export const filterPublications = ({ searchIds, queryId, filterIds }) => (dispatch) => {
  dispatch(
    getPublications(1, { searchItems: searchIds, queryId, filterItems: filterIds }, [
      types.FILTER_PUBLICATIONS_REQUEST,
      { type: types.FILTER_PUBLICATIONS_SUCCESS, meta: { filterIds } },
      types.FILTER_PUBLICATIONS_FAILURE,
    ]),
  );
};
