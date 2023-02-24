import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./containers/App";
import client from "./utils/apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
