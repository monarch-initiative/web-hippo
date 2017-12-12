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

class MainContainer extends Component {
  componentDidMount() {
    this.props.fetchPublications();
  }

  render() {
    const { isLoading, isError } = this.props;
    return (
      <Home>
        <SearchBar loading={isLoading} />
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
