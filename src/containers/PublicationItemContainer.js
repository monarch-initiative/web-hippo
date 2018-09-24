import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sidebar, Segment, Menu, Label } from 'semantic-ui-react';

import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as feedbackSelectors from '../selectors/feedback';
import toJS from '../helpers/toJS';
import PublicationItem from '../components/PublicationItem';
import GeoData from '../components/GeoData';

import { styles } from '../constants';
import { groupByFilters } from '../helpers';

class PublicationItemContainer extends Component {
  state = {
    visible: false,
    icon: 'arrow circle down',
  };

  handleButtonClick = () => {
    this.setState({ visible: !this.state.visible });
    this.setState({
      icon: this.state.visible ? 'arrow circle down' : 'arrow circle up',
    });
  };

  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div style={{ marginBottom: 30 }}>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            vertical
            visible={visible}
            width="thin"
            direction="top"
          >
            <Menu.Item>
              <div
                style={{
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                <Label
                  color={this.props.linkedGeoData.length === 0 ? 'grey' : 'blue'}
                  attached="top right"
                  style={styles.clickable}
                  onClick={this.handleButtonClick}
                  icon={this.state.icon}
                />
                <Label attached="top left" size="medium" paddingBottom={30} color="grey">
                  Annotation Counts
                </Label>
                {groupByFilters(this.props.annotations).map(annotation => (
                  <Label
                    circular
                    size={'huge'}
                    key={annotation.annotation.type}
                    basic
                    color={annotation.annotation.color}
                  >
                    {annotation.count}
                  </Label>
                ))}
              </div>
            </Menu.Item>
            <GeoData {...this.props} />
          </Sidebar>

          <Sidebar.Pusher>
            <PublicationItem {...this.props} />

            <Label
              color={this.props.linkedGeoData.length === 0 ? 'grey' : 'blue'}
              attached="top right"
              style={styles.clickable}
              onClick={this.handleButtonClick}
              icon={this.state.icon}
            />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isPending: feedbackSelectors.isPending(state),
  isError: feedbackSelectors.isError(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(PublicationItemContainer));
