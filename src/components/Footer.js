import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import hpoLogo from '../assets/hpo-logo.png';
import monarchLogo from '../assets/monarch-logo.svg';
import garvanLogo from '../assets/garvan-logo.svg';

export default function Footer() {
  return (
    <Container textAlign="center" style={{ marginTop: 50 }}>
      <Image.Group size="tiny">
        <Image src={garvanLogo} />
        <Image src={monarchLogo} />
        <Image src={hpoLogo} />
      </Image.Group>
    </Container>
  );
}
