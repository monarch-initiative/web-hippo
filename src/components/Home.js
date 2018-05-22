/* eslint react/jsx-indent: "off" */
import React, { Component } from 'react';
import { Sidebar, Container, Message, Grid, Divider, Segment } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SubscriptionContainer from '../containers/SubscriptionContainer';
import FiltersContainer from '../containers/FiltersContainer';
import PaginationContainer from '../containers/PaginationContainer';
import Publications from './Publications';
import NavBar from './NavBar';
import Footer from './Footer';

class Home extends Component {
  state = { height: window.innerHeight, showFilters: false };

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight = () => {
    this.setState({ height: window.innerHeight });
  };

  render() {
    const { isLoading, isError, publicationItems, pagination } = this.props;
    const canRenderPublications = !isLoading && !isError && Array.isArray(publicationItems);
    const hasPublications = canRenderPublications && publicationItems.length > 0;
    return (
      <div>
        <NavBar
          showFilters={hasPublications}
          onFiltersClick={() => this.setState({ showFilters: !this.state.showFilters })}
        />
        <Sidebar.Pushable>
          <Sidebar
            as={Segment}
            style={{ backgroundColor: '#F8F8FB' }}
            animation="overlay"
            width="wide"
            vertical
            visible={this.state.showFilters && hasPublications}
          >
            {hasPublications && <FiltersContainer />}
          </Sidebar>
          <Sidebar.Pusher>
            <div style={{ minHeight: this.state.height - 300, marginBottom: '5em' }}>
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
            <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Home;
