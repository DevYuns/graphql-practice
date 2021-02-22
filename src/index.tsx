import {ApolloProvider} from '@apollo/client';
import App from './components/App';
import React from "react";
import ReactDOM from 'react-dom';
import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById("root")
);