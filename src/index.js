import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';
import './index.css';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// logger
// extra stuff for logging immutable

// redux
const middleware = [];
middleware.push(thunk);
middleware.push(apiMiddleware);

// logging (only in development)
if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);
  const logger = createLogger();
  middleware.push(logger);
}

// create patient portal store
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)) // add logging in as middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
