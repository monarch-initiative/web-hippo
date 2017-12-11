import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import toJS from '../helpers/toJS';

class SearchContainer extends Component {
  render() {
    return <div>search goes here</div>;
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(SearchContainer)
);
