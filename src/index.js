import "@babel/polyfill";
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import React from 'react';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {
  AdminLogIn,
  SignUp,
  CompanyInformation,
  CompanyContact,
  Payment,
  CCPayment,
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

const PrivateRoute = ({ component: Component, ...rest, }) => {
  let user = localStorage.getItem('username');
  let storage = JSON.parse(localStorage.getItem(user));
  let isAuthen = false;
  if (storage) {
    let expiresInSec = storage.expiresInSec;
    let now = new Date().getTime();
    isAuthen = expiresInSec >= now;
  }
  return (
    <Route {...rest} render={(props) => (
      isAuthen ?
        <Component {...props} />
        : <Redirect to={{
          pathname: PATH.LOG_IN,
          state: { from: props.location },
        }} />
    )} />
  )
}

const Loading = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={props.retry}>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>{console.log(props.pastDelay)}Loading.....</div>;
  } else {
    return <div>{console.log('load')}Loading...</div>;
  }
}

const Appointment = Loadable({
  loader: () => import('./containers/dashboard/appointment'),
  loading: Loading
});
const Customer = Loadable({
  loader: () => import('./containers/dashboard/customer'),
  loading: Loading
});
const LogIn = Loadable({
  loader: () => import('./containers/login'),
  loading: Loading
})
const Dashboard = Loadable({
  loader: () => import('./containers/dashboard'),
  loading: Loading
})
const SystemSetting = Loadable({
  loader: () => import('./containers/dashboard/systemSetting'),
  loading: Loading
})
const Technician = Loadable({
  loader: () => import('./containers/dashboard/technician'),
  loading: Loading,
})
const UserProfile = Loadable({
  loader: () => import('./containers/userProfile'),
  loading: Loading
})
const Router = () => {

  return (
    <Switch>
      <Route exact path={PATH.DASH_BOARD} component={Dashboard} />
      <Route exact path={PATH.USER_PROFILE} component={UserProfile} />
      <PrivateRoute exact path={PATH.APPOINTMENT} component={Appointment} />
      <Route exact path={PATH.CUSTOMER} component={Customer} />
      <Route exact path={PATH.SYSTEM_SETTING} component={SystemSetting} />
      <Route exact path={PATH.TECHNICIAN} component={Technician} />
      <Route exact path={PATH.LOG_IN} component={LogIn} />
      <Route exact path={PATH.ADMIN_LOG_IN} component={AdminLogIn} />
      <Route exact path={PATH.SIGN_UP} component={SignUp} />
      <Route exact path={PATH.COMPANY_INFORMATION} component={CompanyInformation} />
      <Route exact path={PATH.COMPANY_CONTACT} component={CompanyContact} />
      <Route exact path={PATH.CC_PAYMENT} component={CCPayment} />
      <Route exact path={PATH.PAYMENT} component={Payment} />
    </Switch>
  )
}


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
