import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as publicationSelectors from '../selectors/publications';
import * as filterSelectors from '../selectors/filters';
import toJS from '../helpers/toJS';
import Home from '../components/Home';

class HomeContainer extends Component {
  componentDidMount() {
    if (this.props.match.params.searchIds) {
      this.props.fetchPublications(this.props.match.params.searchIds.split(','));
    }
  }

  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = state => ({
  publicationItems: publicationSelectors.publicationItems(state),
  isLoading: publicationSelectors.isLoading(state),
  isError: publicationSelectors.isError(state) || filterSelectors.isError(state),
  pagination: publicationSelectors.pagination(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(HomeContainer));
