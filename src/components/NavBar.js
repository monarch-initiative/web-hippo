import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default function NavBar({ showFilters, onFiltersClick }) {
  return (
    <Menu style={{ marginBottom: 0, borderRadius: 0 }}>
      <Container>
        <Menu.Item header as={Link} to="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        {showFilters && (
          <Menu.Item header onClick={onFiltersClick}>
            <Icon name="filter" />
            Filters
          </Menu.Item>
        )}
      </Container>
      <Menu.Item>Hippo. Version 0.6.2 BETA</Menu.Item>
    </Menu>
  );
}
