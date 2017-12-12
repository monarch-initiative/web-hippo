import React from 'react';
import { Container, Header } from 'semantic-ui-react';

export default function Home({ children }) {
  return (
    <Container style={{ marginTop: '7em' }}>
      <Header as="h1">Pubmed Browser</Header>
      {children}
    </Container>
  );
}
