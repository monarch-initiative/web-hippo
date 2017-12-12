import React from 'react';
import { Message } from 'semantic-ui-react';

export default function ErrorAlert({ error }) {
  if (!error) return null;
  return (
    <Message negative>
      <Message.Header>
        We're sorry we can't browse the library at the moment
      </Message.Header>
      <p>Please try again later.</p>
    </Message>
  );
}
