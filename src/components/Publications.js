import React from 'react';
import PublicationItemContainer from '../containers/PublicationItemContainer';

export default function Publications({ publicationItems }) {
  return (
    <div>
      {publicationItems.map(item => <PublicationItemContainer key={item.pmid} {...item} />)}
    </div>
  );
}
