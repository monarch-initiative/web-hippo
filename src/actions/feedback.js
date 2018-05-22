import * as types from '../constants';
import { postFeedback } from '../api';

export const submitFeedback = (feedbackId, feedback) => (dispatch) => {
  dispatch(
    postFeedback({ feedbackId, feedback }, [
      types.FEEDBACK_REQUEST,
      { type: types.FEEDBACK_SUCCESS, meta: { feedbackId } },
      types.FEEDBACK_FAILURE,
    ]),
  );
};
