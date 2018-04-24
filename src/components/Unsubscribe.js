import React from 'react';
import { Card } from 'semantic-ui-react';

export default function Unsubscribe({ isError, isUnsubscribing, isUnsubscribed }) {
  return (
    <div>
      <Card centered style={{ marginTop: 100 }}>
        <Card.Content>
          {isUnsubscribing && <Card.Header>Please wait....</Card.Header>}
          {isError && <Card.Header>Usubscribe failed.</Card.Header>}
          {isUnsubscribed && <Card.Header>You have been sucessfully unsubscribed.</Card.Header>}
        </Card.Content>
      </Card>
    </div>
  );
}
