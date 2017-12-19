import { fromJS } from 'immutable';
import * as types from '../constants';
import { getGeneseFromAnnotations } from '../helpers';

const initialState = {
  genes: []
};

const filters = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case types.FETCH_PUBLICATIONS_SUCCESS:
      return state.set(
        'genes',
        fromJS(getGeneseFromAnnotations(action.payload))
      );
    case types.SET_GENE_SELECTION_IN_FILTERS: {
      const indexOf = state
        .get('genes')
        .findIndex(g => g.get('symbol') === action.symbol);
      return indexOf > -1
        ? state.set(
            'genes',
            state
              .get('genes')
              .update(indexOf, v => v.set('selected', action.selected))
          )
        : state;
    }
    default:
      return state;
  }
};

export default filters;
