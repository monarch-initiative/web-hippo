import * as types from '../constants';
import { post } from '../api';

export const fetchPublications = () => {
  return dispatch => {
    dispatch(
      post(
        '/query',
        {
          gene: {
            condition: 'OR',
            symbols: ['T']
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
