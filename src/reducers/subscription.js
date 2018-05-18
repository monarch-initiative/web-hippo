import { fromJS } from 'immutable';
import * as types from '../constants';

const initialState = {
  subscribing: false,
  subscribed: false,

  unsubscribing: false,
  unsubscribed: false,

  error: false,
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
    case types.UNSUBSCRIBE_REQUEST:
      return action.error
        ? state
          .set('unsubscribed', false)
          .set('unsubscribing', false)
          .set('error', true)
        : state.set('unsubscribed', false).set('unsubscribing', true);
    case types.UNSUBSCRIBE_FAILURE:
      return state
        .set('unsubscribed', false)
        .set('unsubscribing', false)
        .set('error', true);
    case types.UNSUBSCRIBE_SUCCESS:
      return state
        .set('unsubscribed', true)
        .set('unsubscribing', false)
        .set('error', false);
    default:
      return state;
  }
};

export default subscription;
