import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Register } from './containers'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const store = configureStore();

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

render(
    <Root store={store} />,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
