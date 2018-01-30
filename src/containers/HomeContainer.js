import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as publicationSelectors from '../selectors/publications';
import * as filterSelectors from '../selectors/filters';
import toJS from '../helpers/toJS';
import Home from '../components/Home';

const mapStateToProps = state => ({
  publicationItems: publicationSelectors.getPublicationItems(state),
  filterItems: filterSelectors.filterItems(state),
  isLoading: publicationSelectors.isLoading(state),
  isError: publicationSelectors.isError(state) || filterSelectors.isError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Home));
