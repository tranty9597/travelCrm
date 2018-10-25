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
  AdminLogIn,
  SignUp,
  CompanyInformation,
  CompanyContact,
  Appoinment,
  Dashboard,
  Payment
} from './containers'

import {
  UikPageFade, UikContainerVertical, UikContainerHorizontal
} from './UikLayout'

import { NavBar } from "./layout"

import classnames from 'classnames';
import { PATH } from './constant';
import cls from './App.module.scss'

const store = configureStore();

const Router = () => (
  <Switch>
    <Route exact path={PATH.DASH_BOARD} component={Dashboard} />
    <Route exact path={PATH.LOG_IN} component={LogIn} />
    <Route exact path={PATH.ADMIN_LOG_IN} component={AdminLogIn} />
    <Route exact path={PATH.SIGN_UP} component={SignUp} />
    <Route exact path="/appoinment" component={Appoinment} />
    <Route exact path={PATH.COMPANY_INFORMATION} component={CompanyInformation} />
    <Route exact path={PATH.COMPANY_CONTACT} component={CompanyContact} />
    <Route exect path={PATH.PAYMENT} component={Payment} />
  </Switch>
)

const Root = ({ store }) => (
  <UikPageFade className={classnames(cls.app)}>
    <Provider store={store}>
      <BrowserRouter>
        <UikContainerVertical>
          <NavBar />
          <UikContainerHorizontal>
            <Router />
          </UikContainerHorizontal>
        </UikContainerVertical>
      </BrowserRouter>
    </Provider>
  </UikPageFade>
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
