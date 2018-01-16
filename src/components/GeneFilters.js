import React, { Component } from 'react';
import { Header, Checkbox, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
const NUMBER_OF_VISIBLE_FILTERS = 10;

const Link = styled.a`
  cursor: pointer;
`;

class GeneFilters extends Component {
  state = { numberOfVisibleFilters: NUMBER_OF_VISIBLE_FILTERS };

  getFilters = () => {
    const { filters } = this.props;
    const { numberOfVisibleFilters } = this.state;
    if (!filters || !Array.isArray(filters)) return [];
    return filters.slice(0, numberOfVisibleFilters);
  };

  extendNumberOfVisibleFilters = numberOfVisibleFilters =>
    this.setState({
      numberOfVisibleFilters
    });

  renderMoreFilters = () => {
    const { filters } = this.props;
    const { numberOfVisibleFilters } = this.state;
    if (!filters || filters.length <= numberOfVisibleFilters) return null;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: 10
        }}
      >
        <Link
          onClick={() =>
            this.extendNumberOfVisibleFilters(
              numberOfVisibleFilters + NUMBER_OF_VISIBLE_FILTERS
            )
          }
        >
          More
        </Link>
        <Link onClick={() => this.extendNumberOfVisibleFilters(filters.length)}>
          All
        </Link>
      </div>
    );
  };

  render() {
    const { onFilterChange } = this.props;
    return (
      <div>
        <Header as="h4">Genes</Header>
        <Segment color="yellow" padded>
          {this.getFilters().map(filterItem => (
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
          {this.renderMoreFilters()}
        </Segment>
      </div>
    );
  }
}

export default GeneFilters;
