import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as subscriptionSelectors from '../selectors/subscription';
import toJS from '../helpers/toJS';
import Unsubscribe from '../components/Unsubscribe';

class UnsubscribeContainer extends Component {
  componentDidMount() {
    const {
      unsubscribe,
      match: {
        params: { subscriptionId },
      },
    } = this.props;
    unsubscribe(subscriptionId);
  }

  render() {
    return <Unsubscribe {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isError: subscriptionSelectors.isError(state),
  isUnsubscribing: subscriptionSelectors.isUnsubscribing(state),
  isUnsubscribed: subscriptionSelectors.isUnsubscribed(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(UnsubscribeContainer));
