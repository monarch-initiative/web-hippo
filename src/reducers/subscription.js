import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = {
  subscribing: false,
  error: false,
  subscribed: false
};
const subscription = (state = fromJS(initialState), action) => {
  switch (action.type) {
    case types.SUBSCRIPTION_CLEAR:
      return fromJS(initialState);
    case types.SUBSCRIPTION_REQUEST:
      return action.error
        ? state
            .set('subscribed', false)
            .set('subscribing', false)
            .set('error', true)
        : state.set('subscribed', false).set('subscribing', true);
    case types.SUBSCRIPTION_FAILURE:
      return state
        .set('subscribed', false)
        .set('subscribing', false)
        .set('error', true);
    case types.SUBSCRIPTION_SUCCESS:
      return state
        .set('subscribed', true)
        .set('subscribing', false)
        .set('error', false);
    default:
      return state;
  }
};

export default subscription;
