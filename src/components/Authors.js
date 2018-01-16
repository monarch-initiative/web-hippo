import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

export default function Authors({ authors }) {
  return (
    <div
      style={{
        paddingTop: 16,
        paddingBottom: 16,
        display: 'flex',
        direction: 'row'
      }}
    >
      <Icon name="users" />
      <Label.Group size="small">
        {authors.map((author, index) => (
          <Label basic style={{ border: 'none' }} key={index}>{`${
            author.lastName
          } ${author.initials}`}</Label>
        ))}
      </Label.Group>
    </div>
  );
}
