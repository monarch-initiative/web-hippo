/* eslint react/jsx-indent: "off" */
import React, { Component } from 'react';
import { Sidebar, Segment } from 'semantic-ui-react';
import FiltersContainer from '../../containers/FiltersContainer';
import NavBar from '../NavBar';
import Footer from '../Footer';
import ResultLayout from './ResultLayout';
import LandingLayout from './LandingLayout';

class Home extends Component {
  state = {
    height: window.innerHeight,
    showFilters: window.matchMedia('(min-width: 1430px)').matches,
  };

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
    const { isLoading, isError, publicationItems, showResultLayout } = this.props;
    const canRenderPublications = !isLoading && !isError && Array.isArray(publicationItems);
    const hasPublications = canRenderPublications && publicationItems.length > 0;
    return (
      <div>
        <NavBar
          showFilters={showResultLayout && hasPublications}
          onFiltersClick={() => this.setState({ showFilters: !this.state.showFilters })}
        />
        <Sidebar.Pushable>
          <Sidebar
            as={Segment}
            style={{ backgroundColor: '#F8F8FB' }}
            animation="overlay"
            width="wide"
            vertical
            visible={showResultLayout && this.state.showFilters && hasPublications}
          >
            {hasPublications && <FiltersContainer />}
          </Sidebar>
          <Sidebar.Pusher>
            {showResultLayout && (
              <ResultLayout
                height={this.state.height}
                {...this.props}
                hasPublications={hasPublications}
                canRenderPublications={canRenderPublications}
              />
            )}

            {!showResultLayout && <LandingLayout height={this.state.height} />}
            <Footer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Home;
