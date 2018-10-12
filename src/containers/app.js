import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { loginAction } from "../actions"
import { UikKnowledgeTopic, UikDropdown } from '../UikLayout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: ""
    }
  }

  onSubmit(e) {
    this.props.loginAction(this.state.user, this.state.pass);
  }

  render() {

    if (this.props.login.user) {
      return <Redirect to="/about" />
    }
    return (
      <div className="App">
        <h1>Login</h1>
        <p>username</p>
        <UikKnowledgeTopic />
        <input type="text" onChange={(e) => { this.setState({ user: e.target.value }) }} />
        <p>password</p>
        <input type="password" onChange={(e) => this.setState({ pass: e.target.value })} />
        <br />
        <input onClick={this.onSubmit.bind(this)} disabled={this.state.user === "" || this.state.pass === ""} type="submit" value="Login" />

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
