/* eslint  react/no-array-index-key: "off" */
import React from 'react';
import AnnotationContainer from '../containers/AnnotationContainer';
import { getOffsetsArray, splitTextByOffsets, getEntityType } from '../helpers';

export default function ArticleAbstractViewer({ pmid, articleAbstract, annotations }) {
  const articleAbstractArray = splitTextByOffsets(articleAbstract, getOffsetsArray(annotations));
  return (
    <p>
      {articleAbstractArray.map(
        (item, index) =>
          (item.isAnnotated ? (
            <AnnotationContainer
              key={index}
              pmid={pmid}
              annotation={{ id: item.id, startIndex: item.startIndex, endIndex: item.endIndex }}
              href={getEntityType(item.type).href(item.id)}
              color={getEntityType(item.type).color}
            >
              {item.text}
            </AnnotationContainer>
          ) : (
            item.text
          )),
      )}
    </p>
  );
}
