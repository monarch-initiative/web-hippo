import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as publicationSelectors from '../selectors/publications';
import * as filterSelectors from '../selectors/filters';
import * as searchSelectors from '../selectors/search';
import toJS from '../helpers/toJS';
import Home from '../components/Home';

class HomeContainer extends Component {
  /*
  componentDidMount() {
    if (this.props.match.params.searchIds) {
      this.props.fetchPublications(this.props.match.params.searchIds.split(','));
    }
  } */

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
    return <Home {...this.props} handlePageChange={this.handlePageChange} />;
  }
}

const mapStateToProps = state => ({
  publicationItems: publicationSelectors.getPublicationItems(state),
  selectedFilterIds: filterSelectors.selectedFilterIds(state),
  filterItems: filterSelectors.filterItems(state),
  searchIds: searchSelectors.searchIds(state),
  queryId: publicationSelectors.queryId(state),
  isLoading: publicationSelectors.isLoading(state),
  isError: publicationSelectors.isError(state) || filterSelectors.isError(state),
  pagination: publicationSelectors.pagination(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(HomeContainer));
