import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import PublicationItem from './PublicationItem';

class Publications extends Component {
  render() {
    const { isLoading, isError, publicationItems } = this.props;
    if (isLoading || isError || !Array.isArray(publicationItems)) return null;
    return (
      <div>
        <Header>Result ({publicationItems.length})</Header>

        {publicationItems.map(item => {
          return <PublicationItem key={item.pmid} {...item} />;
        })}
      </div>
    );
  }
}

export default Publications;
