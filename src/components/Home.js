import React from 'react';
import NavBar from './NavBar';
import { Container, Message, Grid } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';
import Publications from '../components/Publications';
import SubscriptionContainer from '../containers/SubscriptionContainer';
import FiltersContainer from '../containers/FiltersContainer';

export default function Home({ isLoading, isError, publicationItems }) {
  return (
    <div>
      <NavBar />
      <Grid centered style={{ marginTop: '8em' }}>
        <Grid.Row>
          <Grid.Column width={8}>
            <SearchBarContainer />
            {isError && (
              <Message
                negative
                header="We're sorry we can't browse the library at the moment"
                content="Please try again later."
              />
            )}
          </Grid.Column>
        </Grid.Row>
        {!isLoading &&
          !isError &&
          Array.isArray(publicationItems) && [
            <Grid.Row key="1">
              <Grid.Column width={8}>
                <SubscriptionContainer
                  header={`Result(${publicationItems.length})`}
                />
              </Grid.Column>
            </Grid.Row>,
            publicationItems.length > 0 && (
              <Grid.Row key="2">
                <Grid.Column width={4}>
                  <FiltersContainer />
                </Grid.Column>
                <Grid.Column width={8} style={{ marginTop: '2em' }}>
                  <Container text>
                    <Publications publicationItems={publicationItems} />
                  </Container>
                </Grid.Column>
              </Grid.Row>
            )
          ]}
      </Grid>
    </div>
  );
}
