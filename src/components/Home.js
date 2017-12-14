import React from 'react';
import NavBar from './NavBar';
import { Container, Header } from 'semantic-ui-react';

export default function Home({ children }) {
  return (
    <Container text style={{ marginTop: '7em' }}>
      <NavBar />
      {children}
    </Container>
  );
}
