import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as feedbackSelectors from '../selectors/feedback';
import toJS from '../helpers/toJS';
import Annotation from '../components/Annotation';

const feedbackId = props => `${props.pmid}${props.annotation.id}${props.annotation.startIndex}`;

class AnnotationContainer extends Component {
  handleFeedback = (feedback) => {
    const { pmid, annotation, submitFeedback } = this.props;
    submitFeedback(feedbackId(this.props), { pmid, annotation, feedback });
  };

  render() {
    return <Annotation {...this.props} handleFeedback={this.handleFeedback} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  isPending: feedbackSelectors.isPending(state),
  isError: feedbackSelectors.isError(state),
  showFeedback: !feedbackSelectors.isFeedbackPosted(state, feedbackId(ownProps)),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(AnnotationContainer));
