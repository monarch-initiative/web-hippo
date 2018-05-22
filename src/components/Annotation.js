import React from 'react';
import { Popup, List, Icon } from 'semantic-ui-react';
import FeedbackButtons from './FeedbackButtons';
import AnnotatedText from './AnnotatedText';
import { getEntityType, getCountOfTypes } from '../helpers';

const Annotation = ({ children, showFeedback, isPending, handleFeedback, highlights }) => (
  <Popup
    hoverable
    wide
    trigger={
      <AnnotatedText highlightsCount={getCountOfTypes(highlights)}>{children}</AnnotatedText>
    }
  >
    <List divided relaxed>
      {highlights.map(({ feedbackId, link, type, text, description }) => (
        <List.Item key={feedbackId}>
          <List.Content>
            <List.Header>
              <span style={{ color: getEntityType(type).color }}>{text} </span>
              <a href={link} target="_blank">
                <Icon name="external" />
              </a>
            </List.Header>
            <List.Description style={{ paddingTop: 10, paddingBottom: 10 }} content={description} />
            <FeedbackButtons
              showFeedback={showFeedback}
              feedbackId={feedbackId}
              isPending={isPending}
              handleFeedback={handleFeedback}
            />
          </List.Content>
        </List.Item>
      ))}
    </List>
  </Popup>
);

export default Annotation;
