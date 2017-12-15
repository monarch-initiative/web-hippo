import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import * as actions from '../actions';
import * as selectors from '../selectors';
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
  publicationItems: selectors.getPublicationItems(state),
  isLoading: selectors.isLoading(state),
  isError: selectors.isError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(HomeContainer)
);
