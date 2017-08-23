import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../reducers';
import Immutable from 'immutable';

class ExampleContainer extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Home Page</h1>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleContainer);
