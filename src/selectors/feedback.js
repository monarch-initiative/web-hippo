export const isPending = state => state.getIn(['feedback', 'isPending']);
export const isError = state => state.getIn(['feedback', 'error']);
export const isFeedbackPosted = (state, feedbackId) =>
  state.getIn(['feedback', 'postedItems']).get(feedbackId);
