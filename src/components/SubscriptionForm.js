import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import { Form, Button, Label, Select, Input, Message } from 'semantic-ui-react';
import { isRequired, isValidEmailAddress } from '../helpers/validators';

const renderError = ({ touched, error }) =>
  touched &&
  (error && (
    <Label basic color="red" pointing>
      {error}
    </Label>
  ));

const renderField = ({ input, label, type, meta }) => (
  <Form.Field>
    <Input {...input} placeholder={label} type={type} />
    {renderError(meta)}
  </Form.Field>
);

const renderOptions = ({ input, options, label, meta }) => (
  <Form.Field>
    <Select
      fluid
      value={input.value}
      placeholder={label}
      options={options}
      closeOnChange={true}
      onChange={(evt, data) => input.onChange(data.value)}
    />
    {renderError(meta)}
  </Form.Field>
);

const SubscriptionForm = props => {
  const {
    handleSubmit,
    onSubscribe,
    onCancel,
    isSubscribing,
    isSubscribed,
    isError
  } = props;
  return (
    <form className="ui form" onSubmit={handleSubmit(onSubscribe)}>
      <Field
        name="searchName"
        component={renderField}
        type="text"
        label="Name"
        required
        validate={[isRequired]}
      />

      <Field
        name="digestFrequencyInDays"
        component={renderOptions}
        type="text"
        label="Frequency"
        required
        options={[
          { key: 'daily', text: 'Daily', value: 1 },
          { key: 'weekly', text: 'Weekly', value: 7 },
          { key: 'monthly', text: 'Monthly', value: 30 }
        ]}
        validate={[isRequired]}
      />
      <Field
        name="emailId"
        component={renderField}
        type="text"
        label="Email address"
        required
        validate={[isRequired, isValidEmailAddress]}
      />
      {isSubscribed ? (
        <Message
          success
          header="Subscribed successfully"
          content="Subscription is submitted successfully."
        />
      ) : (
        <Button
          type="submit"
          color="green"
          disabled={isSubscribing}
          loading={isSubscribing}
        >
          Subscribe Now
        </Button>
      )}
      <Button type="button" onClick={onCancel}>
        Cancel
      </Button>
      {isError && (
        <Message
          negative
          header="Error"
          content="Failed to submit the subscription. Please try again later."
        />
      )}
    </form>
  );
};

SubscriptionForm.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'subscription'
})(SubscriptionForm);
