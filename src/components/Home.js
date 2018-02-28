import React from 'react';
import { Container, Message, Grid, Pagination } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';
import Publications from '../components/Publications';
import SubscriptionContainer from '../containers/SubscriptionContainer';
import FiltersContainer from '../containers/FiltersContainer';
import NavBar from './NavBar';

export default function Home({
  isLoading,
  isError,
  publicationItems,
  filterItems,
  pagination,
  handlePageChange,
}) {
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
                <SubscriptionContainer header={`Result(${pagination.totalArticles})`} />
              </Grid.Column>
            </Grid.Row>,
            (publicationItems.length > 0 ||
              (Array.isArray(filterItems) && filterItems.length > 0)) && (
              <Grid.Row key="2">
                <Grid.Column width={4}>
                  <FiltersContainer />
                </Grid.Column>
                <Grid.Column width={8} style={{ marginTop: '2em' }}>
                  <Container text>
                    <Publications style={{ width: '100px' }} publicationItems={publicationItems} />
                    {pagination.totalPages > 1 && (
                      <Pagination
                        style={{ width: '100%' }}
                        boundaryRange={3}
                        activePage={pagination.pageNo}
                        totalPages={pagination.totalPages}
                        onPageChange={(event, { activePage }) => {
                          handlePageChange(activePage);
                        }}
                      />
                    )}
                  </Container>
                </Grid.Column>
              </Grid.Row>
            ),
          ]}
      </Grid>
    </div>
  );
}
