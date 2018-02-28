import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as publicationSelectors from '../selectors/publications';
import * as filterSelectors from '../selectors/filters';
import toJS from '../helpers/toJS';
import Home from '../components/Home';

class HomeContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (
      this.props.pagination &&
      nextProps.pagination &&
      this.props.pagination.pageNo !== nextProps.pagination.pageNo &&
      !nextProps.isError
    ) {
      window.scrollTo(0, 0);
    }
  }
  handlePageChange = pageNo =>
    this.props.fetchPublicationsPage(
      this.props.searchItems,
      this.props.selectedFilterItems,
      this.props.queryId,
      pageNo,
    );

  render() {
    return <Home {...this.props} handlePageChange={this.handlePageChange} />;
  }
}

const mapStateToProps = state => ({
  publicationItems: publicationSelectors.getPublicationItems(state),
  selectedFilterItems: filterSelectors.selectedFilterItems(state),
  filterItems: filterSelectors.filterItems(state),
  searchItems: publicationSelectors.searchItems(state),
  queryId: publicationSelectors.queryId(state),
  isLoading: publicationSelectors.isLoading(state),
  isError: publicationSelectors.isError(state) || filterSelectors.isError(state),
  pagination: publicationSelectors.pagination(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(HomeContainer));
