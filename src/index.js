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
  CompanyInformation,
  Dashboard
} from './containers'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cls from "./styles/layout.module.scss";
import classnames from 'classnames';
import { PATH } from './constant';

const store = configureStore();

const Root = ({ store }) => (
    <div className={classnames(cls.text, cls.bg)}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path={PATH.DASH_BOARD} component={Dashboard} />
            <Route exact path={PATH.LOG_IN} component={LogIn} />
            <Route exact path={PATH.SIGN_UP} component={SignUp} />
            <Route exact path={PATH.COMPANY_INFORMATION} component={CompanyInformation} />
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
