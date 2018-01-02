import React from 'react';
import { Header, Checkbox, Segment } from 'semantic-ui-react';

export default function GeneFilters({ filters, onFilterChange }) {
  return (
    <div>
      <Header as="h4">Genes</Header>
      <Segment color="yellow" padded>
        {filters &&
          Array.isArray(filters) &&
          filters.map(filterItem => (
            <div key={filterItem.symbol}>
              <Checkbox
                value={filterItem.symbol}
                onChange={(event, data) => onFilterChange(data)}
                label={`${filterItem.symbol} (${
                  filterItem.publications.length
                })`}
              />
            </div>
          ))}
      </Segment>
    </div>
  );
}
