import React from 'react';
import styled from 'styled-components';

const BaseAnnotatedText = styled.span`
  border-bottom-width: 2px;
  border-bottom-color: #3b82c7;
  cursor: help;
`;

const SingleAnnotatedText = styled(BaseAnnotatedText)`
  border-bottom-style: dotted;
`;

const DoubleAnnotatedText = styled(BaseAnnotatedText)`
  border-bottom-style: dashed;
`;

const TrippleAnnotatedText = styled(BaseAnnotatedText)`
  border-bottom-style: solid;
`;

const AnnotatedText = ({ highlightsCount, children, ...restOfProps }) => {
  if (highlightsCount === 2) {
    return <DoubleAnnotatedText {...restOfProps}>{children}</DoubleAnnotatedText>;
  }

  if (highlightsCount >= 3) {
    return <TrippleAnnotatedText {...restOfProps}>{children}</TrippleAnnotatedText>;
  }

  return <SingleAnnotatedText {...restOfProps}>{children}</SingleAnnotatedText>;
};

export default AnnotatedText;
