import React from 'react';
import { Header, Segment, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import Authors from './Authors';
import ArticleAbstractViewer from './ArticleAbstractViewer';

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
      <Label ribbon>
        {publication && publication.title}
        <Icon name="calendar" style={{ marginLeft: 5, marginRight: 3 }} />
        {moment(datePublished).format('LL')}
      </Label>

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
