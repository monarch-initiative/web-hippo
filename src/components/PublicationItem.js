import React from 'react';
import { Header, Segment, Label } from 'semantic-ui-react';
import moment from 'moment';
import Authors from './Authors';

export default function PublicationItem({
  articleAbstract,
  articleRank,
  articleTitle,
  datePublished,
  authors,
  pmid
}) {
  return (
    <Segment>
      <Label color="teal" ribbon>
        {articleRank}
      </Label>
      <Header>{articleTitle}</Header>
      <Authors authors={authors} />

      <p>{articleAbstract}</p>

      <Label.Group size="tiny">
        <Label>{moment(datePublished).format('LL')}</Label>
        <Label>PMID: {pmid}</Label>
      </Label.Group>
    </Segment>
  );
}
