import React from 'react';
import ReactDOM from 'react-dom';
import { createClient, defaultExchanges, Provider } from 'urql';
import App from './components/app';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: defaultExchanges
});

const app = (
  <Provider value={client}>
    <App />
  </Provider>
);

const rootElement = document.getElementById('root');

ReactDOM.render(app, rootElement);
