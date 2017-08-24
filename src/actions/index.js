import * as types from '../constants';
import { List } from 'immutable';

export const getExampleDataRequest = (data) => ({
  type: types.EXAMPLE_RESPONSE,
  data: data
});
