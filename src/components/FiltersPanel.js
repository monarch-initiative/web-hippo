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
  let defaultTabActiveIndex = null;

  const tabPanes = ENTITIES.map((entity, index) => {
    const filterItemsByType = filterItems.filter(item => item.type === entity.type);
    if (filterItemsByType.length === 0) return null;

    defaultTabActiveIndex = defaultTabActiveIndex === null ? index : defaultTabActiveIndex;
    return {
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
    };
  });

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
        defaultActiveIndex={defaultTabActiveIndex}
        panes={tabPanes}
      />
    </div>
  );
}
