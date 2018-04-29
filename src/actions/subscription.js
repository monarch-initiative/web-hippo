import * as types from '../constants';
import { postSubscription, deleteSubscription } from '../api';

export const clearSubscription = () => ({
  type: types.SUBSCRIPTION_CLEAR,
});

export const subscribe = ({ subscriptionInfo, searchItems }) => (dispatch) => {
  dispatch(postSubscription(
    {
      ...subscriptionInfo,
      query: { searchItems },
    },
    [types.SUBSCRIPTION_REQUEST, types.SUBSCRIPTION_SUCCESS, types.SUBSCRIPTION_FAILURE],
  ));
};

export const unsubscribe = subscriptionId => (dispatch) => {
  dispatch(deleteSubscription(subscriptionId, [
    types.UNSUBSCRIBE_REQUEST,
    types.UNSUBSCRIBE_SUCCESS,
    types.UNSUBSCRIBE_FAILURE,
  ]));
};
