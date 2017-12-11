import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import toJS from '../helpers/toJS';
import MockUI from '../components/MockUI';

class PublicationsContainer extends Component {
  componentDidMount() {
    this.props.fetchPublications();
  }

  render() {
    return <MockUI />;
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(PublicationsContainer)
);
