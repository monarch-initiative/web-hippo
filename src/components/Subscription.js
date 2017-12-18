import React from 'react';
import { Header, Divider, Menu, Icon } from 'semantic-ui-react';
import SubscriptionForm from './SubscriptionForm';

export default function Subscription({
  header,
  isSubscriptionFormOpen,
  toggleSubscriptionForm,
  subscribe,
  isSubscribing,
  isSubscribed,
  isError
}) {
  return (
    <div style={{ marginBottom: 30 }}>
      <Divider horizontal>
        <Menu text>
          <Menu.Item>
            <Header>{header}</Header>
          </Menu.Item>

          <Menu.Item onClick={toggleSubscriptionForm}>
            <Icon name="mail" />
          </Menu.Item>
        </Menu>
      </Divider>

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
