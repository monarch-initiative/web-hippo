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

  handleSelectedItemsChange = selectedItemIds =>
    this.props.setSelectedItems(unionBy(this.props.selectedItems, this.props.autocompleteItems, 'id').filter(item => selectedItemIds.indexOf(item.id) >= 0));

  handleSearch = () => {
    const { selectedItems } = this.props;
    if (!Array.isArray(selectedItems) || selectedItems.length === 0) return;

    const searchItems = selectedItems.map(item => ({
      id: item.id,
      type: item.type,
    }));
    this.props.fetchPublications(searchItems);
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
  selectedItems: searchSelectors.selectedItems(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(toJS(SearchBarContainer)));
