import React from 'react';
import { Header, Segment, Label } from 'semantic-ui-react';
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
  pmid
}) {
  return (
    <Segment>
      <Label color="teal" ribbon>
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
