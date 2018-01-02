import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div style={{ paddingBottom: '1em' }}>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>Pubmed Browser</Menu.Item>
          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
