import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    loginAct,
    setUserName,
    setPassword,
    clearLogIn,
} from '../../actions/authentication';
import {
    getCustomers,
    setServiceCompany,
    clearDashboard
} from '../../actions/dashboard';
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

    componentDidMount() {
        let { user } = this.props.login;
        if (user) {
            this.props.clearLogIn(user);
            this.props.clearDashboard();
        }
    }

    onSubmit = (username, password, serviceCompanyID, serviceCompanyName) => {
        this.props.loginAct(
            username,
            password,
            serviceCompanyID,
            serviceCompanyName,
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
        if (!serviceCompanyName.data) {
            this.props.setServiceCompany(1, { data: serviceCompanyName.data, error: 'Required' })
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
            user,
            username,
            password,
            loginStatus,
            usernameError,
            passwordError
        } = this.props.login;
        let { customers, serviceCompanyName } = this.props.dashboard;
        let disabled = !username || !password || !serviceCompanyName.data;
        let isLoading = loginStatus === STATUS.loading;
        const { from } = this.props.location.state || { from: { pathname: PATH.DASH_BOARD } };
        // console.log(user)
        // if (user) {
        //     return <Redirect to={from} />
        // }
        return (
            <Form
                footer
                formTitle="Log In"
                buttonTitle="Log In"
                onSubmit={() => this.validate(username, password, serviceCompanyName)}
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
                        value={username}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Password"
                        type="password"
                        onChange={(value) => this.onChange('setPassword', value)}
                        error={passwordError}
                        value={password}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="HVAC Company"
                        showHint
                        hintData={customers.length === 0 ? dataTest : customers}
                        onChange={(value) => this.onChange('setServiceCompany', value)}
                        error={serviceCompanyName.error}
                        value={serviceCompanyName.data}
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
        loginAct: (user, pass, serviceCompanyID, serviceCompanyName, callBackSuccess) => {
            dispatch(loginAct(user, pass, serviceCompanyID, serviceCompanyName, callBackSuccess))
        },
        setUserName: (username, error) => {
            dispatch(setUserName(username, error))
        },
        setPassword: (password, error) => {
            dispatch(setPassword(password, error))
        },
        clearLogIn: (user) => {
            dispatch(clearLogIn(user))
        },
        getCustomers: () => {
            dispatch(getCustomers())
        },
        setServiceCompany: (id, name) => {
            dispatch(setServiceCompany(id, name))
        },
        clearDashboard: () => {
            dispatch(clearDashboard())
        }
    }

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn);
