import React, { Component } from 'react';
import {
  Redirect,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loginAct,
  setUserName,
  setPassword,
  clearLogIn
} from '../../actions/authentication';

import {
  Input,
  Form
} from "../../common";

import classnames from 'classnames';

import { PATH, STATUS } from '../../constant';

const dataTest = [
  {
    name: "SOS Heating and Cooling, LLC",
    address: "32415 Abshire Rapid, South Nicklaushaven DE 04850-8005"
  },
  {
    name: "SOS Constractor",
    address: "79685 Reed Ranch Suite 989, West Odellside, VT 54065-4909"
  }
]

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onSubmit = (username, password) => {
    this.props.loginAct(
      username,
      password,
      () => this.props.history.replace(PATH.DASH_BOARD)
    );
  }

  validate = (username, password) => {
    if (!username) {
      this.setUserName(username, "Required");
    }
    if (!password) {
      this.setUserName(password, "Required");
    }
    if (username && password) {
      this.onSubmit(username, password);
    }
  }

  onChange = (key, value) => {
    this.props[key](value, "");
  }

  toSignUp = (e) => {
    e.preventDefault();
    this.props.clearLogIn();
    this.props.history.push(PATH.SIGN_UP);
  }

  render() {
    let {
      user,
      username,
      password,
      loginStatus,
      usernameError,
      passwordError
    } = this.props.login;

    let disabled = username === "" || password === "";
    let isLoading = loginStatus === STATUS.loading;

    // const { from } = this.props.location.state || { from: { pathname: PATH.DASH_BOARD } }

    // if (user) {
    //   return <Redirect to={from} />
    // }
    return (
      <Form
        footer
        formTitle="Log In"
        buttonTitle="Log In"
        onSubmit={() => this.validate(username, password)}
        disabled={disabled}
        isLoading={isLoading}
        afterButton={
          <div className={classnames("text-center")}>
            Don't have an account? <a href="" onClick={(e) => this.toSignUp(e)}><b>Sign up now</b></a>
          </div>
        }
      >
        <div className={classnames("form-group")}>
          <Input
            onChange={(value) => this.onChange('setUserName', value)}
            label="Username"
            error={usernameError}
          />
        </div>
        <div className={classnames("form-group")}>
          <Input
            label="Password"
            type="password"
            onChange={(value) => this.onChange('setPassword', value)}
            error={passwordError}
          />
        </div>
      </Form>
    );
  }
}


const mapStateToProps = state => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginAct: (user, pass, callBackSuccess) => {
      dispatch(loginAct(user, pass, callBackSuccess))
    },
    setUserName: (username, error) => {
      dispatch(setUserName(username, error))
    },
    setPassword: (password, error) => {
      dispatch(setPassword(password, error))
    },
    clearLogIn: () => {
      dispatch(clearLogIn())
    }
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
