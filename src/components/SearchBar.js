import React from 'react';
import { Form, Select, Button, Dropdown } from 'semantic-ui-react';
import { stringArrayToOptionsArray } from '../helpers';
import { union } from 'lodash';

const conditionOptions = [
  { key: 'any', text: 'Any', value: 'OR' },
  { key: 'all', text: 'All', value: 'AND' }
];

export default function SearchBar({
  isSearchLoading,
  isAutocompleteLoading,
  autocompleteGenes,
  selectedGenes,
  searchQuery,
  condition,
  handleAutocompleteGenesSearchChange,
  handleSelectedGenesChange,
  handleConditionChange,
  handleSearch
}) {
  return (
    <div style={{ marginBottom: 64 }}>
      <Form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          direction: 'row'
        }}
      >
        <Dropdown
          fluid
          search
          selection
          multiple
          loading={isAutocompleteLoading}
          placeholder="Genes..."
          options={stringArrayToOptionsArray(
            union(selectedGenes, autocompleteGenes)
          )}
          value={selectedGenes}
          onSearchChange={(e, { searchQuery: newSearchQuery }) =>
            handleAutocompleteGenesSearchChange(newSearchQuery)
          }
          onChange={(e, { value }) => handleSelectedGenesChange(value)}
          searchQuery={searchQuery}
        />
        <Select
          style={{ marginLeft: 5 }}
          name="condition"
          compact
          options={conditionOptions}
          value={condition}
          onChange={(e, { value }) => handleConditionChange(value)}
        />
        <Button
          style={{ marginLeft: 5 }}
          loading={isSearchLoading}
          type="submit"
          icon="search"
        />
      </Form>
    </div>
  );
}
