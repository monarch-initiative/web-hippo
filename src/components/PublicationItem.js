import React from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Authors from './Authors';
import ArticleAbstractViewer from './ArticleAbstractViewer';
import JournalInfo from './JournalInfo';
import PMIDLabel from './PMIDLabel';
import PublicationDate from './PublicationDate';

export default function PublicationItem({
  articleAbstract,
  articleTitle,
  datePublished,
  authors,
  annotations,
  publication,
  pmid,
}) {
  return (
    <Segment style={{ marginBottom: 0 }}>
      <PublicationDate datePublished={datePublished} />
      <JournalInfo publication={publication} />
      <Header>{articleTitle}</Header>
      <Authors authors={authors} />
      <ArticleAbstractViewer
        pmid={pmid}
        articleAbstract={articleAbstract}
        annotations={annotations}
      />
      <PMIDLabel pmid={pmid} />
    </Segment>
  );
}
