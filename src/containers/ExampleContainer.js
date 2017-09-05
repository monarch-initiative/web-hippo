import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as selectors from '../selectors';
import toJS from '../helpers/toJS';

class ExampleContainer extends Component {
  render() {
    console.log(this.props.exampleData);
    return (
      <div className="container">
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-right">
              <li className="nav-item">
                <a className="nav-link active">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">Web base</h3>
        </div>

        <div className="jumbotron">
          <h1 className="display-3">Replace Me Please</h1>
          <p className="lead">Web base</p>
          <p>
            <button
              className="btn btn-lg btn-success"
              onClick={this.props.addToState}
            >
              Display state
            </button>
          </p>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">
            <h4>
              {this.props.exampleData.genome}
            </h4>
            <pre>
              {JSON.stringify(this.props.exampleData, null, 2)}
            </pre>
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
  const exampleData = selectors.getMyExampleData(state);
  console.log('e.g.', exampleData);
  return {
    exampleData
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToState: () => {
    dispatch(actions.getExampleDataRequest({ genome: 'Happy coding :D' }));
  },
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(ExampleContainer)
);
