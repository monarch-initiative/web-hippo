import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as feedbackSelectors from '../selectors/feedback';
import toJS from '../helpers/toJS';
import Annotation from '../components/Annotation';

class AnnotationContainer extends Component {
  handleFeedback = (feedbackId, feedback) => {
    const { submitFeedback } = this.props;
    submitFeedback(feedbackId, feedback);
  };

  render() {
    return <Annotation {...this.props} handleFeedback={this.handleFeedback} />;
  }
}

const mapStateToProps = state => ({
  isPending: feedbackSelectors.isPending(state),
  isError: feedbackSelectors.isError(state),
  showFeedback: feedbackId => !feedbackSelectors.isFeedbackPosted(state, feedbackId),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(AnnotationContainer));
