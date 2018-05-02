import React from 'react';
import { Button, Grid, Popup } from 'semantic-ui-react';

const Annotation = ({ children, color, href }) => (
  <Popup
    wide
    trigger={<a style={{ borderBottom: '3px double', cursor: 'pointer', color }}>{children}</a>}
    on="click"
  >
    <Grid divided>
      <Grid.Column>
        <Button circular positive icon="thumbs up" />
        <Button circular negative icon="thumbs down" />
        <Button circular icon="linkify" as="a" href={href} target="_blank" />
      </Grid.Column>
    </Grid>
  </Popup>
);

export default Annotation;
