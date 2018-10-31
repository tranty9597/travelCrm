import "@babel/polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {
  LogIn,
  AdminLogIn,
  SignUp,
  CompanyInformation,
  CompanyContact,
  Dashboard,
  Payment,
  CCPayment,
  UserProfile
} from './containers'

import {
  UikPageFade,
  UikContainerVertical,
  UikContainerHorizontal
} from './UikLayout'

import { NavBar } from "./common"
import Loadable from 'react-loadable';
import classnames from 'classnames';
import { PATH } from './constant';
import cls from './App.module.scss'

const store = configureStore();
export default store;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    store.getState().login.user ?
      <Component {...props} />
      : <Redirect to={{
        pathname: PATH.LOG_IN,
        state: { from: props.location }
      }} />
  )} />
)
function Loading({ error, pastDelay }) {
  if (error) {
    return <div>{error}</div>;
  } else if (pastDelay) {
    return <h3>Loading...</h3>;
  } else {
    return <h3>Loading...</h3>
  }
}

const Appointment = Loadable({
  loader: () => import('./containers/dashboard/appointment'),
  loading: Loading,
  delay: 300
});
const System = Loadable({
  loader: () => import('./containers/dashboard/system'),
  loading() {
    return <div>Loading...</div>
 }
});
const Router = () => (
  <Switch>
    <Route exact path={PATH.DASH_BOARD} component={Dashboard} />
    <Route exact path={PATH.SYSTEM} component={System} />
    <Route exact path={PATH.APPOINTMENT} component={Appointment} />
    <Route exact path={PATH.LOG_IN} component={LogIn} />
    <Route exact path={PATH.ADMIN_LOG_IN} component={AdminLogIn} />
    <Route exact path={PATH.SIGN_UP} component={SignUp} />
    <Route exact path={PATH.COMPANY_INFORMATION} component={CompanyInformation} />
    <Route exact path={PATH.COMPANY_CONTACT} component={CompanyContact} />
    <Route exact path={PATH.CC_PAYMENT} component={CCPayment} />
    <Route exact path={PATH.PAYMENT} component={Payment} />
    <Route exact path={PATH.USER_PROFILE} component={UserProfile} />
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
