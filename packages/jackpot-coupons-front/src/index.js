import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloProvider as Provider } from 'react-apollo';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';


import App from './App';
import fourOFour from './pages/404';

const GRAPHICOOL_API = 'https://api.graph.cool/simple/v1/cjcc36rt90my80145t8amvgxr';

const cache = new InMemoryCache();

const defaultState = {

}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateNetworkStatus: (_, { isConnected }, { cache }) => {
        const data = {
          networkStatus: { isConnected },
        };
        cache.writeData({ data });
      },
    },
  }
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, new HttpLink({ uri: GRAPHICOOL_API })]),
});

ReactDOM.render(
      <Provider client={client}>
        <Router>
          <App>
            <Switch>
              <Route path="/" exact component={() => (<p>HOME</p>)} />
              <Route path="/user" component={(props) => (<p>users</p>)} />
              <Route path="/commercial-entity">
                <Switch>
                  <Route exact path="/commercial-entity" component={(props) => (<p>DOZKDOZK</p>)}/>
                  <Route path="/commercial-entity/:id" component={(props) => (<p>--------{props.match.params.id}</p>)}/>
                </Switch>
              </Route>
              <Route path="/coupon" component={(props) => (<p>EDIT {props.match.params.id}</p>)} />
              <Route component={fourOFour} />
            </Switch>
          </App>
        </Router>
      </Provider>
, document.getElementById('root'));
registerServiceWorker();
