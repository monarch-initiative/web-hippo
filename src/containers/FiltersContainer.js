import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import Filters from '../components/Filters';
import * as filterSelectors from '../selectors/filters';
import * as publicationSelectors from '../selectors/publications';
import * as searchSelectors from '../selectors/search';
import { ENTITIES } from '../constants';

class FiltersContainer extends Component {
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
    );
  }
}

const mapStateToProps = state => ({
  filterItems: filterSelectors.filterItems(state),
  isLoading: filterSelectors.isLoading(state),
  selectedFilterIds: filterSelectors.selectedFilterIds(state),
  searchIds: searchSelectors.searchIds(state),
  queryId: publicationSelectors.queryId(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(FiltersContainer));
