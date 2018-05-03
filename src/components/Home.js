/* eslint react/jsx-indent: "off" */
import React, { Component } from 'react';
import { Container, Message, Grid, Divider } from 'semantic-ui-react';
import SearchBarContainer from '../containers/SearchBarContainer';
import SubscriptionContainer from '../containers/SubscriptionContainer';
import FiltersContainer from '../containers/FiltersContainer';
import PaginationContainer from '../containers/PaginationContainer';
import Publications from './Publications';
import NavBar from './NavBar';
import Footer from './Footer';

class Home extends Component {
  state = { height: window.innerHeight };

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateHeight);
  }

  updateHeight = () => {
    this.setState({ height: window.innerHeight });
  };

  handleContextRef = (ref) => {
    this.stickTo = ref;
  };

  render() {
    const { isLoading, isError, publicationItems, pagination } = this.props;
    return (
      <div>
        <NavBar />
        <div
          ref={this.handleContextRef}
          style={{ minHeight: this.state.height - 300, marginBottom: '5em' }}
        >
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
                  <SubscriptionContainer />
                  <Divider horizontal>{`Results (${pagination.totalArticles})`}</Divider>
                </Grid.Column>
              </Grid.Row>,
              publicationItems.length > 0 && (
                <Grid.Row key="2">
                  <Grid.Column width={8} style={{ marginTop: '2em' }}>
                    <Container text>
                      <FiltersContainer />
                      <Publications publicationItems={publicationItems} />
                      <PaginationContainer />
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              ),
            ]}
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
