import * as types from '../constants';
import { postSubscription } from '../api';

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
