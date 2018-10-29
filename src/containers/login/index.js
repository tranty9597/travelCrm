import React, { Component } from 'react';
import {
  Redirect,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import {
  loginAct,
  checkUserAct
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
      username: "",
      password: ""
    }
  }

  onSubmit = () => {
    this.props.loginAct(
      this.state.username,
      this.state.password
    );
  }

  render() {
    let {
      username,
      password
    } = this.state;

    let {
      user,
      loginError,
      loginStatus
    } = this.props.login;

    let disabled = username === "" || password === "";
    let isLoading = loginStatus === STATUS.loading;

    if (user) {
      return <Redirect to={PATH.DASH_BOARD} />
    }
    return (
      <Form
        footer
        formTitle="Log In"
        buttonTitle="Log In"
        onSubmit={this.onSubmit}
        disabled={disabled}
        isLoading={isLoading}
        afterButton={
          <div className={classnames("text-center")}>
            Don't have an account? <Link to={PATH.SIGN_UP}><b>Sign up now</b></Link>
          </div>
        }
      >
        <div className={classnames("form-group")}>
          <Input
            onChange={(value) => { this.setState({ username: value }) }}
            label="Username"
            error={loginError}
          />
        </div>
        <div className={classnames("form-group")}>
          <Input
            label="Password"
            type="password"
            onChange={(value) => { this.setState({ password: value }) }}
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
    loginAct: (user, pass) => {
      dispatch(loginAct(user, pass))
    }
  }

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);
