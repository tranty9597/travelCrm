import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import {
  LogIn,
  SignUp,
  CompanyInformation
} from './containers'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cls from "./styles/layout.module.scss";

const store = configureStore();

const Root = ({ store }) => (
  <div className={[
    cls.text, 
    cls.bg]}>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/signup/" component={SignUp} />
          <Route exact path="/signup/companyInformation/" component={CompanyInformation} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
