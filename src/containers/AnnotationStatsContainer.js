import React, { Component } from 'react';
import { Label, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import { groupByFilters, getAnnotationStatsDetails } from '../helpers';
import { styles } from '../constants';
import AnnotationStatsDetails from '../components/AnnotationStatsDetails';

class AnnotationStatsContainer extends Component {
  state = {
    isAnnotationStatDetailsOpen: false,
    annotationDetails: [],
    entityType: null,
  };

  showAnnotationDetails = (type) => {
    const { annotations } = this.props;
    const annotationDetailsArray = getAnnotationStatsDetails(type, annotations);
    if (type === this.state.entityType) {
      this.setState({ isAnnotationStatDetailsOpen: !this.state.isAnnotationStatDetailsOpen });
    } else {
      this.setState({ isAnnotationStatDetailsOpen: true });
    }

    this.setState({ entityType: type });
    this.setState({
      annotationDetails: annotationDetailsArray,
    });
  };

  render() {
    const { annotations, linkedGeoData, downButtonIcon, downButtonAction } = this.props;
    return (
      <div
        style={{
          paddingTop: 0,
          paddingBottom: 10,
        }}
      >
        <Label
          color={linkedGeoData.length === 0 ? 'grey' : 'blue'}
          attached="top right"
          style={styles.clickable}
          onClick={downButtonAction}
          icon={downButtonIcon}
        />

        <Label attached="top left" size="medium" color="grey">
          Annotation Details
        </Label>
        <Button.Group>
          {groupByFilters(annotations).map(annotation => (
            <Button
              // circular
              size={'big'}
              key={annotation.annotation.type}
              basic
              color={annotation.annotation.color}
              onClick={() => this.showAnnotationDetails(annotation.annotation.type)}
            >
              {annotation.count}
            </Button>
          ))}
        </Button.Group>
        <AnnotationStatsDetails
          annotationSatsDetails={this.state.annotationDetails}
          shouldShow={this.state.isAnnotationStatDetailsOpen}
          entityType={this.state.entityType}
        />
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(AnnotationStatsContainer));
