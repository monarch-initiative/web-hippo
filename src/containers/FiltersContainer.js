import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import GeneFilters from '../components/GeneFilters';
import * as filterSelectors from '../selectors/filters';

class FiltersContainer extends Component {
  render() {
    return <GeneFilters filters={this.props.filters} />;
  }
}

const mapStateToProps = state => ({
  filters: filterSelectors.filters(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  toJS(FiltersContainer)
);
