import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

export default function Authors({ authors }) {
  return (
    <div style={{ paddingTop: 16, paddingBottom: 16 }}>
      <Label.Group size="small">
        <Icon name="users" />
        {authors.map((author, index) => (
          <Label key={index}>{`${author.lastName} ${author.initials}`}</Label>
        ))}
      </Label.Group>
    </div>
  );
}
