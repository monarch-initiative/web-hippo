import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Header, Container, Button } from 'semantic-ui-react';
import step1 from '../assets/tutorial/step1.png';
import step2 from '../assets/tutorial/step2.png';
import step3 from '../assets/tutorial/step3.png';
import step4 from '../assets/tutorial/step4.png';

export default () => (
  <Container text style={{ paddingTop: '5em', paddingBottom: '5em' }}>
    <Header>Welcome to the Monarch Hippo interactive browser</Header>
    <p>
      Do you often search for a phenotype, a gene symbol or a disease in Pubmed and try to find out
      other relevant biomedical entities in the same context? If that’s you then the Monarch Hippo
      can help you to do it in a few clicks!
    </p>

    <Header>Simple and easy search with label suggestions</Header>
    <Card fluid>
      <Image src={step1} />
      <Card.Content>
        <Card.Description>
          Start typing your the phenotype, disease or gene you are looking for and pick it from
          best-matched suggestions. Just hit enter or click the search button. You may have more
          than one item in the search bar, and that will bring all articles having at least one of
          the search entities. [Tip icon/image]: You can bookmark your search after hitting search
          button.
        </Card.Description>
      </Card.Content>
    </Card>
    <Header>Annotated results along with linked entities</Header>
    <Card fluid>
      <Image src={step2} />
      <Card.Content>
        <Card.Description>
          The search returns sorted Pubmed abstracts along with the most relevant entities. In the
          centre, you can find the abstract with underlined entities, title, published date, authors
          and PMID. Hovering over the underlined text can give a quick preview of entities with a
          short description and feedback for that particular annotation. [Tip icon/Image] On the
          annotation popup, there is a link for detailed information about that entity.
        </Card.Description>
      </Card.Content>
    </Card>
    <Header>Filters and refined search</Header>
    <Card fluid>
      <Image src={step3} />
      <Card.Content>
        <Card.Description>
          The interactive lists in left side provide refinement filters for your result. You can
          select any of them from tabbed columns and optimize the result set (articles and
          co-occurred entities). In the given example, by clicking on TNF filter, we got all
          articles having TNF co-occurred with Hypertention and Myocardial Infarction (at least one
          of them). Filters can be removed by clicking them again or you can just eliminate one by
          one from applied filters list. [Tip icon/image] To keep your result set concise, start
          with one search item and apply filter to find associations.
        </Card.Description>
      </Card.Content>
    </Card>
    <Header>Continuous integration and subscription </Header>
    <Card fluid>
      <Image src={step4} />
      <Card.Content>
        <Card.Description>
          You cannot miss any of the latest research on your area of interest because the Monarch
          Hippo is constantly integrating articles published on Pubmed. If you are keen to keep an
          eye on published research having your desired entity, you can subscribe your search query.
          All you have to do is click on search subscription and fill in a form with your search
          name, a valid email id and frequency of digest. [Tip icon/image] The subscription will
          take care of search query only (not filters), so that you don’t miss anything.
        </Card.Description>
      </Card.Content>
    </Card>
    <Header>Excited to see this happen?</Header>
    <Button as={Link} to="/query/HP:0001658,HP:0000822">
      Try Now
    </Button>
  </Container>
);
