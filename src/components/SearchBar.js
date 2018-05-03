import React, { Component } from 'react';
import { Form, Button, Dropdown, Label } from 'semantic-ui-react';
import { unionBy, debounce } from 'lodash';
import { itemsToOptionsArray, getEntityType } from '../helpers';

const getTypeStyle = type => ({
  color: getEntityType(type).color,
});

class SearchBar extends Component {
  state = { searchQuery: '' };

  handleDebouncedSearchChange = debounce(
    () => this.props.handleAutocompleteSearchChange(this.state.searchQuery),
    500,
  );

  handleSearchChange = (e, { searchQuery }) =>
    this.setState({ searchQuery }, () => this.handleDebouncedSearchChange());

  handleChange = (e, { value }) => {
    this.setState({ searchQuery: '' });
    this.props.handleSelectedItemsChange(value);
  };

  render() {
    const {
      isSearchLoading,
      isAutocompleteLoading,
      autocompleteItems,
      searchItems,
      searchIds,
      handleSearch,
    } = this.props;

    return (
      <div>
        <Form
          onSubmit={handleSearch}
          style={{
            display: 'flex',
            direction: 'row',
          }}
        >
          <Dropdown
            fluid
            search={filteredOptions => filteredOptions}
            selection
            multiple
            closeOnChange
            loading={isAutocompleteLoading}
            placeholder="Search..."
            renderLabel={item => <Label style={item.style} content={item.text} />}
            options={itemsToOptionsArray(
              unionBy(searchItems, autocompleteItems, 'id'),
              getTypeStyle,
            )}
            value={searchIds}
            onSearchChange={this.handleSearchChange}
            onChange={this.handleChange}
            searchQuery={this.state.searchQuery}
          />
          <Button style={{ marginLeft: 5 }} loading={isSearchLoading} type="submit" icon="search" />
        </Form>
      </div>
    );
  }
}

export default SearchBar;
