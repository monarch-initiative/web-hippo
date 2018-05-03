import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import publications from './publications';
import subscription from './subscription';
import search from './search';
import filters from './filters';
import feedback from './feedback';

/**
 * @return collection of reducers
 */
const reducers = combineReducers({
  form,
  publications,
  filters,
  subscription,
  search,
  feedback,
});

export default reducers;
