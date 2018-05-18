import React from 'react';
import styled from 'styled-components';

const JournalInfoText = styled.p`
  font-size: 0.8465em;
  padding-top: 20px;
`;

export default function JournalInfo({ publication }) {
  if (!publication) return null;
  return (
    <JournalInfoText>
      {`${publication.title} , ISSN#:${publication.issnNumber} ${
        publication.issnType
      }`}
    </JournalInfoText>
  );
}
