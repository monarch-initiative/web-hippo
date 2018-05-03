import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import hpoLogo from '../assets/hpo-logo.png';
import monarchLogo from '../assets/monarch-logo.png';
import garvanLogo from '../assets/kccg-garvan-logo.png';

export default function Footer() {
  return (
    <Container textAlign="center" fluid>
      <Image.Group>
        <Image size="small" src={garvanLogo} />
        <Image size="small" src={monarchLogo} />
        <Image size="small" src={hpoLogo} />
      </Image.Group>
    </Container>
  );
}
