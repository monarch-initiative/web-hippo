import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import 'core-js/shim';
import 'semantic-ui-css/semantic.min.css';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import App from './App';
import reducer from './reducers';
import './index.css';

const middleware = [thunk, apiMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware.push(logger);
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
