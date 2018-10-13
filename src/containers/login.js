import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction } from "../actions"
import { UikInput, UikButton } from '../UikLayout';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
      isLoading: false
    }
  }

  onSubmit(e) {
    this.setState({ isLoading: true })
    setTimeout(
      () => {
        this.props.loginAction(this.state.user, this.state.pass);
        this.setState({ isLoading: false })

      }, 2000
    )
  }

  render() {
    let disabled = this.state.user === "" || this.state.pass === "";
    if (this.props.login.user) {
      return <Redirect to="/profile" />
    }
    return (
      <div className="">
        <div className="container col-lg-4 jumbotron shadow p-3 mb-5 bg-white rounded" style={{
          marginTop: "10%",
          backgroundColor: "#ffffff",
        }}>
          <div className="justify-content-center">
            <h2>Login</h2>
          </div>
          <div className="form-group">
            <UikInput
              onChange={(e) => { this.setState({ user: e.target.value }) }}
              label="Username"
            />
          </div>
          <div className="form-group">
            <UikInput
              label="Password"
              type="password"
              onChange={(e) => { this.setState({ pass: e.target.value }) }}
            />
          </div>

          <div className="form-group" style={{ marginTop: "35px" }}>
            <UikButton
              className={!disabled ? "btn-block btn-primary" : "btn-block"}
              contentClassName="justify-content-center"
              onClick={this.onSubmit.bind(this)}
              disabled={disabled}
              isLoading={this.state.isLoading}
            >
              Login
            </UikButton>
          </div>
        </ div>
        <div className="text-center">
          Don't have an account? <Link to="/"><b>Sign up now</b></Link>
        </div>
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
)(Login);
