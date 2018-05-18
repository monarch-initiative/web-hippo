import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import Filters from '../components/Filters';
import FiltersBar from '../components/FiltersBar';

import * as filterSelectors from '../selectors/filters';
import * as publicationSelectors from '../selectors/publications';
import { ENTITIES } from '../constants';

class FiltersContainer extends Component {
  state = { filtersBarExpanded: false };
  handleFilterChange = (type, { value, checked }) => {
    const { searchIds, queryId, selectedFilterIds } = this.props;
    let filterIds = [];
    if (checked) {
      filterIds = [...selectedFilterIds, value];
    } else {
      filterIds = selectedFilterIds.filter(item => item !== value);
    }

    this.props.filterPublications({
      searchIds,
      queryId,
      filterIds,
    });
  };

  filterItemsByType = type => this.props.filterItems.filter(item => item.type === type);

  render() {
    return (
      <FiltersBar visible={this.props.filterItems && this.props.filterItems.length > 0}>
        <div>
          {ENTITIES.map(entity => (
            <Filters
              disabled={this.props.isLoading}
              key={entity.type}
              type={entity.type}
              title={entity.title}
              color={entity.color}
              items={this.filterItemsByType(entity.type)}
              onFilterChange={this.handleFilterChange}
            />
          ))}
        </div>
      </FiltersBar>
    );
  }
}

const mapStateToProps = state => ({
  filterItems: filterSelectors.filterItems(state),
  isLoading: filterSelectors.isLoading(state),
  selectedFilterIds: filterSelectors.selectedFilterIds(state),
  searchIds: publicationSelectors.searchIds(state),
  queryId: publicationSelectors.queryId(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(FiltersContainer));
