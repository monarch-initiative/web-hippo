import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import toJS from '../helpers/toJS';
import SearchContainer from './SearchContainer';
import PublicationsContainer from './PublicationsContainer';

class MainContainer extends Component {
  render() {
    return (
      <div>
        <SearchContainer />
        <PublicationsContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(MainContainer)
);
