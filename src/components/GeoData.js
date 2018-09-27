import React from 'react';
import { Menu, Label, Segment } from 'semantic-ui-react';

export default function GeoData({ linkedGeoData }) {
  if (linkedGeoData.length !== 0) {
    return (
      <Menu.Item>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Label attached="top left" size="medium" color="grey">
            Linked GEO Records:
          </Label>
        </div>
        <Segment.Group>
          {linkedGeoData.map(linkItem => (
            <Segment textAlign="left" key={linkItem.uid}>
              <span>
                <Label as="a" href={linkItem.link} target="_blank">
                  {linkItem.uid}
                </Label>
              </span>
              <span> {linkItem.title}</span>
              <span
                style={{
                  justifyContent: 'right',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <Label circular>{linkItem.samplesCount}</Label>
              </span>
            </Segment>
          ))}
        </Segment.Group>
      </Menu.Item>
    );
  }
  return null;
}
