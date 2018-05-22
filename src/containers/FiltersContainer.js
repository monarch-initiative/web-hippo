import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import * as filterSelectors from '../selectors/filters';
import * as publicationSelectors from '../selectors/publications';
import FiltersPanel from '../components/FiltersPanel';

class FiltersContainer extends Component {
  handleFilterChange = ({ value, checked }) => {
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

  render() {
    return <FiltersPanel {...this.props} onFilterChange={this.handleFilterChange} />;
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
