import { Map, Set } from 'immutable';
import * as types from '../constants';

const initialState = Map({
  isPending: false,
  error: false,
  postedItems: Set(),
});

const feedback = (state = initialState, action) => {
  switch (action.type) {
    case types.FEEDBACK_REQUEST:
    case types.FEEDBACK_FAILURE:
      return action.error
        ? state.set('isPending', false).set('error', true)
        : state.set('isPending', true).set('error', false);
    case types.FEEDBACK_SUCCESS:
      return state
        .set('isPending', false)
        .set('error', false)
        .update('postedItems', postedItems => postedItems.add(action.meta.feedbackId));
    default:
      return state;
  }
};

export default feedback;
