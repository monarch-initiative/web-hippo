import React from 'react';
import styled from 'styled-components';
import { getOffsetsArray, splitTextByOffsets } from '../helpers';

const Annotated = styled.a`
  border-bottom: 3px double;
`;

export default function ArticleAbstractViewer({
  articleAbstract,
  annotations
}) {
  const articleAbstractArray = splitTextByOffsets(
    articleAbstract,
    getOffsetsArray(annotations)
  );
  return (
    <p>
      {articleAbstractArray.map(
        (item, index) =>
          item.isAnnotated ? (
            <Annotated key={index}>{item.text}</Annotated>
          ) : (
            item.text
          )
      )}
    </p>
  );
}
