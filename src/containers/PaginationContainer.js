import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as publicationSelectors from '../selectors/publications';
import * as filterSelectors from '../selectors/filters';
import * as searchSelectors from '../selectors/search';
import toJS from '../helpers/toJS';
import Pagination from '../components/Pagination';

class PaginationContainer extends Component {
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
      this.props.searchIds,
      this.props.selectedFilterIds,
      this.props.queryId,
      pageNo,
    );

  render() {
    return <Pagination {...this.props} handlePageChange={this.handlePageChange} />;
  }
}

const mapStateToProps = state => ({
  isError: publicationSelectors.isError(state) || filterSelectors.isError(state),
  pagination: publicationSelectors.pagination(state),
  selectedFilterIds: filterSelectors.selectedFilterIds(state),
  searchIds: searchSelectors.searchIds(state),
  queryId: publicationSelectors.queryId(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(PaginationContainer));
