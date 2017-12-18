import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import publications from './publications';
import subscription from './subscription';

/**
 * @return collection of reducers
 */
const exampleReducer = combineReducers({
  form,
  publications,
  subscription
});

export default exampleReducer;
