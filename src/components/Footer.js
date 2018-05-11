import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import hpoLogo from '../assets/hpo-logo.png';
import monarchLogo from '../assets/monarch-logo.png';
import garvanLogo from '../assets/kccg-garvan-logo.png';

export default function Footer() {
  return (
    <Container textAlign="center" fluid>
      <Image.Group>
        <Image size="small" src={garvanLogo} href="https://www.garvan.org.au" target="_blank" />
        <Image
          size="small"
          src={monarchLogo}
          href="https://monarchinitiative.org"
          target="_blank"
        />
        <Image
          size="small"
          src={hpoLogo}
          href="http://human-phenotype-ontology.github.io"
          target="_blank"
        />
      </Image.Group>
    </Container>
  );
}
