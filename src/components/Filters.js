import React, { Component } from 'react';
import { Checkbox, Tab } from 'semantic-ui-react';
import styled from 'styled-components';

const NUMBER_OF_VISIBLE_FILTER_ITEMS = 50;

const Link = styled.a`
  cursor: pointer;
`;

class Filters extends Component {
  state = { numberOfVisibleFilterItems: NUMBER_OF_VISIBLE_FILTER_ITEMS };

  getFilterItems = () => {
    const { items } = this.props;
    const { numberOfVisibleFilterItems } = this.state;
    if (!items || !Array.isArray(items)) return [];
    return items.slice(0, numberOfVisibleFilterItems);
  };

  extendNumberOfVisibleFilterItems = numberOfVisibleFilterItems =>
    this.setState({
      numberOfVisibleFilterItems,
    });

  renderMoreFilters = () => {
    const { items } = this.props;
    const { numberOfVisibleFilterItems } = this.state;
    if (!items || items.length <= numberOfVisibleFilterItems) return null;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 10,
        }}
      >
        <Link
          onClick={() =>
            this.extendNumberOfVisibleFilterItems(
              numberOfVisibleFilterItems + NUMBER_OF_VISIBLE_FILTER_ITEMS,
            )
          }
        >
          More
        </Link>
        <Link onClick={() => this.extendNumberOfVisibleFilterItems(items.length)}>All</Link>
      </div>
    );
  };

  render() {
    const { onFilterChange, items, disabled, selectedFilterIds } = this.props;
    if (!Array.isArray(items) || items.length === 0) return null;
    return (
      <Tab.Pane disabled={disabled}>
        {this.getFilterItems().map(filterItem => (
          <div key={filterItem.id}>
            <Checkbox
              disabled={disabled || filterItem.filteredArticleCount === 0}
              value={filterItem.id}
              checked={selectedFilterIds.includes(filterItem.id)}
              onChange={(_event, data) => onFilterChange(data)}
              label={`${filterItem.text} (${filterItem.filteredArticleCount})`}
            />
          </div>
        ))}
        {this.renderMoreFilters()}
      </Tab.Pane>
    );
  }
}

export default Filters;
