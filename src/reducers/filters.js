import { fromJS } from 'immutable';
import * as types from '../constants';
import { getGeneseFromAnnotations } from '../helpers';

const initialState = {
  genes: [],
  selectedGenes: []
};
const filters = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case types.FETCH_PUBLICATIONS_SUCCESS:
      return state
        .set('genes', fromJS(getGeneseFromAnnotations(action.payload)))
        .set('selectedGenes', []);
    default:
      return state;
  }
};

export default filters;
