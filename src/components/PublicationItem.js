import React from 'react';
import { Header, Segment, Label } from 'semantic-ui-react';
import moment from 'moment';
import Authors from './Authors';
import ArticleAbstractViewer from './ArticleAbstractViewer';
import JournalInfo from './JournalInfo';

export default function PublicationItem({
  articleAbstract,
  articleRank,
  articleTitle,
  datePublished,
  authors,
  annotations,
  publication,
  pmid
}) {
  return (
    <Segment style={{ marginBottom: 40 }}>
      <Label
        ribbon
        icon="calendar"
        content={moment(datePublished).format('LL')}
      />

      <JournalInfo publication={publication} />
      <Header>{articleTitle}</Header>
      <Authors authors={authors} />

      <ArticleAbstractViewer
        articleAbstract={articleAbstract}
        annotations={annotations}
      />

      <Label.Group size="tiny">
        <Label>PMID: {pmid}</Label>
      </Label.Group>
    </Segment>
  );
}
