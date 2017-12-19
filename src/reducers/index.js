import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import publications from './publications';
import subscription from './subscription';
import filters from './filters';

/**
 * @return collection of reducers
 */
const exampleReducer = combineReducers({
  form,
  publications,
  filters,
  subscription
});

export default exampleReducer;
