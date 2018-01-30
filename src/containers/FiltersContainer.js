import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import Filters from '../components/Filters';
import * as filterSelectors from '../selectors/filters';
import * as publicationSelectors from '../selectors/publications';
import { ENTITIES } from '../constants';

class FiltersContainer extends Component {
  handleFilterChange = (type, { value, checked }) => {
    const { searchItems, queryId, selectedFilterItems } = this.props;
    let filterItems = [];
    if (checked) {
      filterItems = [...selectedFilterItems, { type, id: value }];
    } else {
      filterItems = selectedFilterItems.filter(item => item.id !== value);
    }

    this.props.filterPublications({
      searchItems,
      queryId,
      filterItems
    });
  };

  filterItemsByType = type =>
    this.props.filterItems.filter(item => item.type === type);

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
  selectedFilterItems: filterSelectors.selectedFilterItems(state),
  searchItems: publicationSelectors.searchItems(state),
  queryId: publicationSelectors.queryId(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(FiltersContainer)
);
