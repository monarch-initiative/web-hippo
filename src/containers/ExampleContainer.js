import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import Immutable from 'immutable';
import { createSelector } from 'reselect'

class ExampleContainer extends Component {
  render() {
    return (
        <div className="container">
          <div className="header clearfix">
            <nav>
              <ul className="nav nav-pills float-right">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <h3 className="text-muted">Web base</h3>
          </div>

          <div className="jumbotron">
            <h1 className="display-3">Replace Me Please</h1>
            <p className="lead">Web base</p>
            <p><a className="btn btn-lg btn-success" href="#" role="button" onClick={this.props.addToState}>Display state</a></p>
          </div>

          <div className="row marketing">
            <div className="col-lg-6">
              <h4>{ this.props.exampleData }</h4>
            </div>

          </div>

          <footer className="footer">
            <p>© Company 2017</p>
          </footer>
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
    dispatch(actions.getExampleDataRequest({gnenome: 'Happy coding :D'}))
  },
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleContainer);
