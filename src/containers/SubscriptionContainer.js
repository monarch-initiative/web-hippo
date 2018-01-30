import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as subscriptionSelectors from '../selectors/subscription';
import * as publicationSelectors from '../selectors/publications';
import toJS from '../helpers/toJS';
import Subscription from '../components/Subscription';

class SubscriptionContainer extends Component {
  state = { isSubscriptionFormOpen: false };
  toggleSubscriptionForm = () => {
    this.props.clearSubscription();
    this.setState({
      isSubscriptionFormOpen: !this.state.isSubscriptionFormOpen
    });
  };

  subscribe = subscriptionInfo => {
    const { searchItems } = this.props;
    this.props.subscribe({ subscriptionInfo, searchItems });
  };

  render() {
    return (
      <Subscription
        {...this.props}
        isSubscriptionFormOpen={this.state.isSubscriptionFormOpen}
        toggleSubscriptionForm={this.toggleSubscriptionForm}
        subscribe={this.subscribe}
      />
    );
  }
}

const mapStateToProps = state => ({
  isError: subscriptionSelectors.isError(state),
  isSubscribing: subscriptionSelectors.isSubscribing(state),
  isSubscribed: subscriptionSelectors.isSubscribed(state),
  searchItems: publicationSelectors.searchItems(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(SubscriptionContainer)
);
