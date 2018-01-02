import React from 'react';
import PublicationItem from './PublicationItem';

export default function Publications({ publicationItems }) {
  return (
    <div>
      {publicationItems.map(item => {
        return <PublicationItem key={item.pmid} {...item} />;
      })}
    </div>
  );
}
