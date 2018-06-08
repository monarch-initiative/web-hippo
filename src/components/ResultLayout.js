import React from 'react';
import { Container, Message, Grid, Divider, Image } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SubscriptionContainer from '../containers/SubscriptionContainer';
import PaginationContainer from '../containers/PaginationContainer';
import Publications from './Publications';
import logo from '../logo.svg';

export default ({
  publicationItems,
  pagination,
  isError,
  canRenderPublications,
  hasPublications,
  height,
}) => (
  <div style={{ minHeight: height - 300, marginBottom: '5em' }}>
    <Grid centered style={{ marginTop: '1em' }}>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image size="tiny" centered src={logo} />
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
      {canRenderPublications && (
        <Grid.Row key="1">
          <Grid.Column width={8}>
            <SubscriptionContainer />
            <Divider horizontal>{`Results (${pagination.totalArticles})`}</Divider>
          </Grid.Column>
        </Grid.Row>
      )}
    </Grid>
    {hasPublications && (
      <Container text style={{ marginTop: '3em' }}>
        <Publications publicationItems={publicationItems} />
        <PaginationContainer />
      </Container>
    )}
  </div>
);
