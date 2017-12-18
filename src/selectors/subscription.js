export const isError = state => state.getIn(['subscription', 'error']);
export const isSubscribed = state =>
  state.getIn(['subscription', 'subscribed']);
export const isSubscribing = state =>
  state.getIn(['subscription', 'subscribing']);
