import * as types from '../constants';
import { post } from '../api';

export const clearSubscription = () => ({
  type: types.SUBSCRIPTION_CLEAR
});
export const subscribe = ({ subscriptionInfo, searchItems }) => {
  return dispatch => {
    dispatch(
      post(
        '/subscription',
        {
          ...subscriptionInfo,
          query: { searchItems }
        },
        [
          types.SUBSCRIPTION_REQUEST,
          types.SUBSCRIPTION_SUCCESS,
          types.SUBSCRIPTION_FAILURE
        ]
      )
    );
  };
};
