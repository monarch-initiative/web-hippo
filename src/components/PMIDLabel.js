import React from 'react';
import { Label } from 'semantic-ui-react';
import { PUBMED_URL } from '../constants';

export default ({ pmid }) => (
  <Label size="tiny" as="a" href={`${PUBMED_URL}/${pmid}`} target="_blank">
    PMID: {pmid}
  </Label>
);
