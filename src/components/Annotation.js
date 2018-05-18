import React from 'react';
import { Button, Grid, Popup } from 'semantic-ui-react';

const Annotation = ({ children, color, href, showFeedback, isPending, handleFeedback }) => (
  <Popup
    hoverable
    wide
    trigger={<a style={{ borderBottom: '3px double', cursor: 'pointer', color }}>{children}</a>}
  >
    <Grid divided>
      <Grid.Column>
        {showFeedback && [
          <Button
            disabled={isPending}
            key="good"
            circular
            icon="thumbs up"
            onClick={() => handleFeedback('good')}
          />,
          <Button
            disabled={isPending}
            key="bad"
            circular
            icon="thumbs down"
            onClick={() => handleFeedback('bad')}
          />,
        ]}
        <Button circular icon="linkify" as="a" href={href} target="_blank" />
      </Grid.Column>
    </Grid>
  </Popup>
);

export default Annotation;
