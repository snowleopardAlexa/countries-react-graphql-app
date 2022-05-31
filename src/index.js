import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

// we connect only to one route - one single endpoint
// https://countries.trevorblades.com/graphql

// apollo will memorize the query that's why we use cache inmemorycache 
const client = new ApolloClient ({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);


