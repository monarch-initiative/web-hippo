import * as types from '../constants';
import { List } from 'immutable';

/**
 * [getExampleDataRequest]
 * @param  {[object]} data [ store in state]
 * @return {[none]}      []
 */
export const getExampleDataRequest = (data) => ({
  type: types.EXAMPLE_RESPONSE,
  data: data
});
