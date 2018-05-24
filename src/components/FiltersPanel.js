import React from 'react';
import { Tab } from 'semantic-ui-react';
import { ENTITIES } from '../constants';
import Filters from './Filters';
import AppliedFilters from './AppliedFilters';

export default function FiltersPanel({
  selectedFilterIds,
  filterItems,
  isLoading,
  onFilterChange,
}) {
  return (
    <div style={{ padding: 10 }}>
      <AppliedFilters
        disabled={isLoading}
        onFilterChange={onFilterChange}
        filterItems={filterItems}
        selectedFilterIds={selectedFilterIds}
      />

      <Tab
        menu={{ attached: true, tabular: true }}
        panes={ENTITIES.map((entity) => {
          const filterItemsByType = filterItems.filter(item => item.type === entity.type);
          return filterItemsByType.length > 0
            ? {
              menuItem: {
                key: entity.title,
                content: entity.title,
                color: entity.color,
              },
              render: () => (
                <Filters
                  disabled={isLoading}
                  items={filterItemsByType}
                  selectedFilterIds={selectedFilterIds}
                  onFilterChange={onFilterChange}
                />
              ),
            }
            : null;
        })}
      />
    </div>
  );
}
