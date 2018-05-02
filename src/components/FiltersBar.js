import React from 'react';
import { Rail, Sticky } from 'semantic-ui-react';

export default function FiltersBar({ children, stickTo }) {
  return (
    <Rail position="left">
      <Sticky active={!!stickTo} context={stickTo}>
        <div style={{ paddingTop: 50 }}>{children}</div>
      </Sticky>
    </Rail>
  );
}
