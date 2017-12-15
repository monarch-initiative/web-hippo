import React from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import SearchBar from '../components/SearchBar';
import ErrorAlert from '../components/ErrorAlert';
import Publications from '../components/Publications';

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
        <ErrorAlert error={isError} />
        <Publications
          isLoading={isLoading}
          isError={isError}
          publicationItems={publicationItems}
        />
      </Container>
    </div>
  );
}
