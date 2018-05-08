import React from 'react';
import { Rail } from 'semantic-ui-react';

export default function FiltersBar({ children }) {
  return (
    <Rail position="left">
      <div>{children}</div>
    </Rail>
  );
}
