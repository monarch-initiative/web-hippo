import React from 'react';
import { Container, Label } from 'semantic-ui-react';
import { getEntityByType } from '../helpers';

export default function AnnotationStatsDetails({ annotationSatsDetails, shouldShow, entityType }) {
  if (shouldShow === true) {
    return (
      <div
        style={{
          paddingTop: 10,
        }}
      >
        <Container>
          <Label.Group>
            {annotationSatsDetails.map(annotationItem => (
              <Label
                as="a"
                href={annotationItem.link}
                target="_blank"
                key={annotationItem.id}
                basic
                color={getEntityByType(entityType).color}
              >
                {annotationItem.text}
              </Label>
            ))}
          </Label.Group>
        </Container>
      </div>
    );
  }
  return null;
}
