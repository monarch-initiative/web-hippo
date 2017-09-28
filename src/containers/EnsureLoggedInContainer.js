/**
Copy and paste this into your application
*/
import {
  authActions,
  authSelectors,
  EnsureLoggedIn
} from 'web-component-authentication';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  me: authSelectors.getCurrentUser(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMe: () => dispatch(authActions.fetchMe())
});

export default connect(mapStateToProps, mapDispatchToProps)(EnsureLoggedIn);
