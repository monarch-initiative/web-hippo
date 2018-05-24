import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default function NavBar({ showFilters, onFiltersClick }) {
  return (
    <Menu inverted style={{ marginBottom: 0, borderRadius: 0 }}>
      <Container>
        {showFilters && (
          <Menu.Item header onClick={onFiltersClick}>
            <Icon name="filter" />
            Filters
          </Menu.Item>
        )}
      </Container>
      <Menu.Item>Hippo. Version 0.6.1 BETA</Menu.Item>
    </Menu>
  );
}
