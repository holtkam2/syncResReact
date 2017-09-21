import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import App from './components/App.jsx';
import reducer from './reducers/index.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger),
);

render(	
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);