import React from 'react';
import PublicationItem from './PublicationItem';

export default function Publications({ publicationItems }) {
  return (
    <div>
      {publicationItems.map(item => <PublicationItem key={item.pmid} {...item} />)}
    </div>
  );
}
