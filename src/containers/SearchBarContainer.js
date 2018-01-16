import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import * as actions from '../actions';
import toJS from '../helpers/toJS';
import SearchBar from '../components/SearchBar';
import * as publicationSelectors from '../selectors/publications';
import * as searchSelectors from '../selectors/search';
import { splitSearchQuery } from '../helpers';

class SearchBarContainer extends Component {
  handleAutocompleteGenesSearchChange = autocompleteSearchQuery =>
    this.props.fetchGenesAutocompleteList(autocompleteSearchQuery);

  handleSelectedGenesChange = selectedGenes =>
    this.props.setSelectedGenes(selectedGenes);

  handleConditionChange = condition => {
    this.props.setSearchCondition(condition);
  };

  handleSearch = () => {
    const { selectedGenes, condition } = this.props;
    const searchCriteria = queryString.stringify({
      genes: selectedGenes.join(' '),
      condition
    });
    this.props.history.push('/query?' + searchCriteria);
    this.props.fetchPublications({ genes: selectedGenes, condition });
  };

  componentDidMount() {
    var parsed = queryString.parse(this.props.location.search);
    if (parsed.condition && parsed.genes) {
      const selectedGenes = splitSearchQuery(parsed.genes);
      this.props.setSelectedGenes(selectedGenes);
      this.props.fetchPublications({
        condition: parsed.condition,
        genes: selectedGenes
      });
    }
  }

  render() {
    return (
      <SearchBar
        {...this.props}
        handleAutocompleteGenesSearchChange={
          this.handleAutocompleteGenesSearchChange
        }
        handleSelectedGenesChange={this.handleSelectedGenesChange}
        handleConditionChange={this.handleConditionChange}
        handleSearch={this.handleSearch}
      />
    );
  }
}

const mapStateToProps = state => ({
  isSearchLoading: publicationSelectors.isLoading(state),
  isAutocompleteLoading: searchSelectors.isAutocompleteLoading(state),
  autocompleteGenes: searchSelectors.autocompleteGenes(state),
  selectedGenes: searchSelectors.selectedGenes(state),
  condition: searchSelectors.condition(state),
  autocompleteSearchQuery: searchSelectors.autocompleteSearchQuery(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(toJS(SearchBarContainer))
);
