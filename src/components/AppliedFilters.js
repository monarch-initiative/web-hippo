import React from 'react';
import { Label, Header } from 'semantic-ui-react';
import { getItemById, getEntityByType } from '../helpers';

export default function AppliedFilters({
  disabled,
  filterItems,
  selectedFilterIds,
  onFilterChange,
}) {
  if (!Array.isArray(selectedFilterIds) || selectedFilterIds.length === 0) return null;
  return (
    <div style={{ padding: 10 }}>
      <Header as="h4">Applied Filters :</Header>
      <Label.Group>
        {selectedFilterIds.map((id) => {
          const filterItem = getItemById(filterItems, id);
          if (!filterItem) return null;
          const entityType = getEntityByType(filterItem.type);
          return (
            <Label
              active={disabled}
              onRemove={() => !disabled && onFilterChange({ value: id, checked: false })}
              key={id}
              style={{ color: entityType.color }}
              content={filterItem.text}
            />
          );
        })}
      </Label.Group>
    </div>
  );
}
