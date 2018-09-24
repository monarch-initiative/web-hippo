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
          <Label attached="top left" size="medium" color="grey" paddingTop={10}>
            Linked GEO Records:
          </Label>
        </div>
        <Segment.Group>
          {linkedGeoData.map(linkItem => (
            <Segment textAlign="left">
              <Label.Group>
                <Label as="a" href={linkItem.link} target="_blank" padding>
                  {linkItem.uid}
                  <Label.Detail>{linkItem.samplesCount}</Label.Detail>
                </Label>
                {linkItem.title}
              </Label.Group>
            </Segment>
          ))}
        </Segment.Group>
      </Menu.Item>
    );
  }
  return null;
}
