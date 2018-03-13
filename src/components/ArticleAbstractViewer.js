import React from 'react';
import styled from 'styled-components';
import { getOffsetsArray, splitTextByOffsets, getEntityType } from '../helpers';

const Annotated = styled.a`
  border-bottom: 3px double;
  color: ${props => props.color};
`;

export default function ArticleAbstractViewer({ articleAbstract, annotations }) {
  const articleAbstractArray = splitTextByOffsets(articleAbstract, getOffsetsArray(annotations));
  return (
    <p>
      {articleAbstractArray.map(item =>
          (item.isAnnotated ? (
            <Annotated
              key={item.id}
              href={getEntityType(item.type).href(item.id)}
              target="_blank"
              color={getEntityType(item.type).color}
            >
              {item.text}
            </Annotated>
          ) : (
            item.text
          )))}
    </p>
  );
}
