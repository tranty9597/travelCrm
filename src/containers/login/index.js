import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    loginAct,
} from '../../actions/authentication';

import {
    Input,
    Form
} from "../../common";

import classnames from 'classnames';

import { PATH, STATUS } from '../../constant';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    onSubmit = (username, password) => {
        this.props.loginAct(
            username,
            password,
            () => {
                this.props.history.replace(PATH.DASH_BOARD)
            }
        );
    }

    validate = (username, password, serviceCompanyName) => {
        if (!username) {
            this.props.setUserName(username, "Required");
        }
        if (!password) {
            this.props.setPassword(password, "Required");
        }
        if (username && password && serviceCompanyName.data) {
            let { serviceCompanyID, serviceCompanyName } = this.props.dashboard;
            this.onSubmit(
                username,
                password,
                serviceCompanyID,
                serviceCompanyName
            );
        }
    }

    onChange = (key, value) => {
        if (key === 'setServiceCompany') {
            this.props[key](1, { data: value, error: "" });
        } else {
            this.props[key](value, "");
        }
    }

    toSignUp = (e) => {
        e.preventDefault();
        this.props.history.push(PATH.SIGN_UP);
    }

    render() {
        let {
            username,
            password,
        } = this.state;
        let { loginStatus, accessToken } = this.props.login
        let disabled = !username || !password;
        let isLoading = loginStatus === STATUS.loading;
        if (accessToken) {
            return (
                <Redirect to='/d' />
            )
        }
        return (
            <Form
                footer
                formTitle="Log In"
                buttonTitle="Log In"
                onSubmit={() => this.onSubmit(username, password)}
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
                        onChange={(value) => this.setState({ username: value })}
                        label="Username"
                        value={username}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Password"
                        type="password"
                        onChange={(value) => this.setState({ password: value })}
                        value={password}
                    />
                </div>
            </Form>
        );
    }
}


const mapStateToProps = state => {
    return {
        login: state.login,
        dashboard: state.dashboard
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loginAct: (user, pass, callBackSuccess) => {
            dispatch(loginAct(user, pass, callBackSuccess))
        }
    }

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn);
