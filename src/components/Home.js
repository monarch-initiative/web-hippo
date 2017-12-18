import React from 'react';
import NavBar from './NavBar';
import { Container, Message } from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import Publications from '../components/Publications';
import SubscriptionContainer from '../containers/SubscriptionContainer';

export default function Home({
  isLoading,
  isError,
  history,
  location,
  publicationItems,
  handleFetchPublication
}) {
  return (
    <div>
      <NavBar />
      <Container text style={{ marginTop: '7em' }}>
        <SearchBar
          history={history}
          location={location}
          loading={isLoading}
          onSearch={handleFetchPublication}
        />
        {isError && (
          <Message
            negative
            header="We're sorry we can't browse the library at the moment"
            content="Please try again later."
          />
        )}
        {!isLoading &&
          !isError &&
          Array.isArray(publicationItems) && (
            <div>
              <SubscriptionContainer
                header={`Result(${publicationItems.length})`}
              />
              <Publications publicationItems={publicationItems} />
            </div>
          )}
      </Container>
    </div>
  );
}
