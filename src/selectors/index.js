import { createSelector } from 'reselect';

/**
 * [getExampleData]
 * @param  {[object]} state []
 * @return {[object]}       []
 */
export const getExampleData = state => state.get('exampleData');

export const getMyExampleData = createSelector(
  [getExampleData],
  exampleData => exampleData,
);
