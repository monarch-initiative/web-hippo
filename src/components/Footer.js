import React from 'react';
import { Container, Image, Header } from 'semantic-ui-react';
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
      <Header
        size="tiny"
        subheader="The Kinghorn Centre for Clinical Genomics is supported generously by the Kinghorn Foundation. Monarch is supported generously by a NIH Office of the Director Grant #5R24OD011883, as well as by NIH-UDP: HHSN268201350036C, HHSN268201400093P, NCI/Leidos #15X143."
      />
    </Container>
  );
}
