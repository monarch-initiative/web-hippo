import * as types from '../constants';
import { List } from 'immutable';

export const fetchConsentTypeMappingRequest = (data) => ({
  type: types.FETCH_RESPONSE_SUCCESS,
  data: data
});
