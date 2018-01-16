import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import * as publicationSelectors from '../selectors/publications';
import toJS from '../helpers/toJS';
import Home from '../components/Home';

const mapStateToProps = state => ({
  publicationItems: publicationSelectors.filteredPublicationItems(state),
  isLoading: publicationSelectors.isLoading(state),
  isError: publicationSelectors.isError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Home));
