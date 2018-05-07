import React from 'react';
import { Label } from 'semantic-ui-react';
import moment from 'moment';

export default ({ datePublished }) => (
  <Label ribbon icon="calendar" content={moment(datePublished).format('LL')} />
);
