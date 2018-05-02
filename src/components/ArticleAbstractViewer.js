/* eslint  react/no-array-index-key: "off" */
import React from 'react';
import Annotation from './Annotation';
import { getOffsetsArray, splitTextByOffsets, getEntityType } from '../helpers';

export default function ArticleAbstractViewer({ articleAbstract, annotations }) {
  const articleAbstractArray = splitTextByOffsets(articleAbstract, getOffsetsArray(annotations));
  return (
    <p>
      {articleAbstractArray.map(
        (item, index) =>
          (item.isAnnotated ? (
            <Annotation
              key={index}
              href={getEntityType(item.type).href(item.id)}
              color={getEntityType(item.type).color}
            >
              {item.text}
            </Annotation>
          ) : (
            item.text
          )),
      )}
    </p>
  );
}
