import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { unionBy } from 'lodash';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import SearchBar from '../components/SearchBar';
import * as publicationSelectors from '../selectors/publications';
import * as searchSelectors from '../selectors/search';

class SearchBarContainer extends Component {
  handleAutocompleteSearchChange = autocompleteSearchQuery =>
    this.props.fetchAutocompleteList(autocompleteSearchQuery);

  handleSelectedItemsChange = searchItemIds =>
    this.props.setSearchItems(
      unionBy(this.props.searchItems, this.props.autocompleteItems, 'id').filter(
        item => searchItemIds.indexOf(item.id) >= 0,
      ),
    );

  handleSearch = () => {
    const { searchIds } = this.props;
    if (!Array.isArray(searchIds) || searchIds.length === 0) return;
    this.props.fetchPublications(searchIds);
    // this.props.history.push(`/query/${searchIds.join(',')}`);
  };

  render() {
    return (
      <SearchBar
        {...this.props}
        handleAutocompleteSearchChange={this.handleAutocompleteSearchChange}
        handleSelectedItemsChange={this.handleSelectedItemsChange}
        handleSearch={this.handleSearch}
      />
    );
  }
}

const mapStateToProps = state => ({
  isSearchLoading: publicationSelectors.isLoading(state),
  isAutocompleteLoading: searchSelectors.isAutocompleteLoading(state),
  autocompleteItems: searchSelectors.autocompleteItems(state),
  searchItems: searchSelectors.searchItems(state),
  searchIds: searchSelectors.searchIds(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(toJS(SearchBarContainer)));
