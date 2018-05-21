/* eslint  react/no-array-index-key: "off" */
import React from 'react';
import AnnotationContainer from '../containers/AnnotationContainer';
import { splitTextByAnnotations } from '../helpers';

export default function ArticleAbstractViewer({ pmid, articleAbstract, annotations }) {
  const articleAbstractArray = splitTextByAnnotations(articleAbstract, annotations);
  return (
    <p>
      {articleAbstractArray.map(
        (item, index) =>
          (item.isAnnotated ? (
            <AnnotationContainer key={index} pmid={pmid} highlights={item.highlights}>
              {item.text}
            </AnnotationContainer>
          ) : (
            item.text
          )),
      )}
    </p>
  );
}
