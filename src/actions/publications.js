import * as types from '../constants';
import { post } from '../api';
import { splitSearchQuery } from '../helpers';

export const fetchPublications = ({ genes, condition }) => {
  return dispatch => {
    dispatch(
      post(
        '/query',
        {
          gene: {
            condition: condition,
            symbols: splitSearchQuery(genes)
          }
        },
        [
          types.FETCH_PUBLICATIONS_REQUEST,
          types.FETCH_PUBLICATIONS_SUCCESS,
          types.FETCH_PUBLICATIONS_FAILURE
        ]
      )
    );
  };
};
