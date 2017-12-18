export const isRequired = value => (value ? undefined : 'Required.');
export const isValidEmailAddress = value =>
  /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/g.test(
    value
  )
    ? undefined
    : 'Invalid email address.';
