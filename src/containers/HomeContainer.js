import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import * as actions from '../actions';
import * as publicationSelectors from '../selectors/publications';
import toJS from '../helpers/toJS';
import Home from '../components/Home';

class HomeContainer extends Component {
  handleFetchPublication = searchQuery => {
    var parsed = queryString.parse(searchQuery);
    if (parsed.condition && parsed.genes) {
      this.props.fetchPublications({ ...parsed });
    }
  };

  componentDidMount() {
    this.handleFetchPublication(this.props.location.search);
  }

  render() {
    return (
      <Home
        {...this.props}
        handleFetchPublication={this.handleFetchPublication}
      />
    );
  }
}

const mapStateToProps = state => ({
  publicationItems: publicationSelectors.getPublicationItems(state),
  isLoading: publicationSelectors.isLoading(state),
  isError: publicationSelectors.isError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(HomeContainer)
);
