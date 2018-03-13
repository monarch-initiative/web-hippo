import React from 'react';
import { Form, Button, Dropdown, Label } from 'semantic-ui-react';
import { unionBy } from 'lodash';
import { itemsToOptionsArray, getEntityType } from '../helpers';

const getTypeStyle = type => ({
  color: getEntityType(type).color,
});

export default function SearchBar({
  isSearchLoading,
  isAutocompleteLoading,
  autocompleteItems,
  selectedItems,
  autocompleteSearchQuery,
  handleAutocompleteSearchChange,
  handleSelectedItemsChange,
  handleSearch,
}) {
  return (
    <div style={{ marginBottom: 64 }}>
      <Form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          direction: 'row',
        }}
      >
        <Dropdown
          fluid
          search
          selection
          multiple
          closeOnChange
          loading={isAutocompleteLoading}
          placeholder="Search..."
          renderLabel={item => <Label style={item.style} content={item.text} />}
          options={itemsToOptionsArray(
            unionBy(selectedItems, autocompleteItems, 'id'),
            getTypeStyle,
          )}
          value={selectedItems.map(item => item.id)}
          onSearchChange={(e, { searchQuery }) => handleAutocompleteSearchChange(searchQuery)}
          onChange={(e, { value }) => handleSelectedItemsChange(value)}
          searchQuery={autocompleteSearchQuery}
        />
        <Button style={{ marginLeft: 5 }} loading={isSearchLoading} type="submit" icon="search" />
      </Form>
    </div>
  );
}
