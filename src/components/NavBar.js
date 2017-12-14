import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>Pubmed Browser</Menu.Item>
        <Menu.Item as="a" href="/">
          Home
        </Menu.Item>
      </Container>
    </Menu>
  );
}
