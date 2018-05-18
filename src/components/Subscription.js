import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import SubscriptionForm from './SubscriptionForm';

export default function Subscription({
  isSubscriptionFormOpen,
  toggleSubscriptionForm,
  subscribe,
  isSubscribing,
  isSubscribed,
  isError,
}) {
  return (
    <div style={{ marginBottom: 30 }}>
      <Menu text>
        <Menu.Item onClick={toggleSubscriptionForm} position="right">
          <Icon name="mail" />Search subscription
        </Menu.Item>
      </Menu>

      {isSubscriptionFormOpen && (
        <SubscriptionForm
          isError={isError}
          isSubscribed={isSubscribed}
          isSubscribing={isSubscribing}
          onSubscribe={subscriptionInfo => subscribe(subscriptionInfo.toJS())}
          onCancel={toggleSubscriptionForm}
        />
      )}
    </div>
  );
}
