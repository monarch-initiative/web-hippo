import React from 'react';
import { Button } from 'semantic-ui-react';

const FeedbackButtons = ({ feedbackId, showFeedback, isPending, handleFeedback }) =>
  showFeedback(feedbackId) && (
    <div>
      <Button
        disabled={isPending}
        key="good"
        circular
        icon="thumbs up"
        size="mini"
        onClick={() => handleFeedback(feedbackId, 'good')}
      />
      <Button
        disabled={isPending}
        key="bad"
        circular
        icon="thumbs down"
        size="mini"
        onClick={() => handleFeedback(feedbackId, 'bad')}
      />
    </div>
  );

export default FeedbackButtons;
