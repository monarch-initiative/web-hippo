import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../reducers';
import Immutable from 'immutable';
import { createSelector } from 'reselect'

class ExampleContainer extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}} className='container'>
        <h1>Home Page</h1>
        <button onClick={this.props.addToState}> add </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return createSelector(
    selectors.getExampleData,
    (exampleData) => ({exampleData})
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToState: () => {
    dispatch(actions.fetchConsentTypeMappingRequest({gnenome: 'gen-value'}))
  },
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleContainer);
