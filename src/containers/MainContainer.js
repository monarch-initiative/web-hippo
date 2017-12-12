import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import toJS from '../helpers/toJS';
import Publications from '../components/Publications';
import Home from '../components/Home';
import SearchBar from '../components/SearchBar';
import ErrorAlert from '../components/ErrorAlert';
import queryString from 'query-string';

class MainContainer extends Component {
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
    const { isLoading, isError, history, location } = this.props;
    return (
      <Home>
        <SearchBar
          history={history}
          location={location}
          loading={isLoading}
          onSearch={this.handleFetchPublication}
        />
        <ErrorAlert error={isError} />
        <Publications {...this.props} />
      </Home>
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
  toJS(MainContainer)
);
