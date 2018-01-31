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
      <Label basic size="small" style={{ border: 'none' }}>
        {Array.isArray(authors) && authors.length > 0
          ? authors.reduce((result, author, index) => {
              result = result.concat(
                index > 0 ? ', ' : '',
                `${author.lastName} ${author.initials}`
              );
              return result;
            }, '')
          : '[No authors listed]'}
      </Label>
    </div>
  );
}
