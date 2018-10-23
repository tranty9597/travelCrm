import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction } from "../../actions/authentication"

import {
  CommonInput,
  CommonForm,
  CommonFooter
} from "../../common";

import { PATH } from '../../constant';

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
      user: "",
      pass: "",
      isLoading: false
    }
  }

  onSubmit = () => {
    this.setState({ isLoading: true })
    setTimeout(
      () => {
        this.props.loginAction(this.state.user, this.state.pass);
        this.setState({ isLoading: false })

      }, 2000
    )
  }

  render() {
    let {
      user,
      pass,
      isLoading
    } = this.state;
    let disabled = user === "" || pass === "";
    if (this.props.login.user) {
      return <Redirect to={PATH.DASH_BOARD} />
    }
    return (
      <div>
        <CommonForm
          formTitle="Log In"
          buttonTitle="Log In"
          onSubmit={this.onSubmit}
          disabled={disabled}
          isLoading={isLoading}
          afterButton={
            <div className="text-center">
              Don't have an account? <Link to={PATH.SIGN_UP}><b>Sign up now</b></Link>
            </div>
          }
        >
          <div className="form-group">
            <CommonInput
              onChange={(value) => { this.setState({ user: value }) }}
              label="Username"
              showHint
              hintData={dataTest}
            />
          </div>
          <div className="form-group">
            <CommonInput
              label="Password"
              type="password"
              onChange={(value) => { this.setState({ pass: value }) }}
            />
          </div>
        </CommonForm>
        <CommonFooter />
      </div>
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
    loginAction: (user, pass) => {
      dispatch(loginAction(user, pass))
    }
  }
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(LogIn);
