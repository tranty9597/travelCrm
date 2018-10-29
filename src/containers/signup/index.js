import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Input,
    Form
} from "../../common";

import {
    setFirstName,
    setLastName,
    setEmail,
    setUserName,
    setPass,
    setConfirmPass,
    checkUserAct
} from '../../actions/signUp';

import classnames from 'classnames';

import { PATH, LINK, STATUS } from '../../constant';


const EMAIL_REGEX = /^[a-z][a-z0-9_]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g;

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    onSubmit = () => {
        this.props.history.push(PATH.COMPANY_INFORMATION);
    }

    onChange = (key, value) => {
        this.props[key](value);
    }

    validate = (email, user, pass, cfPass) => {
        if (email.data) {
            if (!email.data.match(EMAIL_REGEX)) {
                this.props.setEmail("", "Invalid Email Address")
            }
        }
        if (user.data) {
            this.props.checkUserAct(
                user.data,
                () => {
                    let { email, user, cfPass } = this.props.signup;
                    if (!email.error && !user.error && !cfPass.error) {
                        this.onSubmit();
                    }
                });
        }
        if (pass.data && cfPass.data) {
            if (pass.data !== cfPass.data) {
                this.props.setConfirmPass("", "Password not matched")
            }
        }
    }

    render() {
        let {
            fName,
            lName,
            email,
            user,
            pass,
            cfPass,
            checkUserStatus
        } = this.props.signup;
        let disabled =
            fName.data === "" ||
            lName.data === "" ||
            email.data === "" ||
            user.data === "" ||
            pass.data === "" ||
            cfPass.data === "";
        let isLoading = checkUserStatus === STATUS.loading;
        return (
            <Form
                footer
                isLoading={isLoading}
                formTitle="Sign Up"
                buttonTitle="Let's Get Started"
                onSubmit={() => this.validate(
                    email,
                    user,
                    pass,
                    cfPass)}
                disabled={disabled}
                afterButton={
                    <div className={classnames("text-center")}>
                        Already have an account? <Link to={PATH.LOG_IN}><b>Log in</b></Link>
                    </div>
                }
            >
                <div className={classnames("form-group", "row")}>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => this.onChange('setFirstName', value)}
                            label="First Name"
                            error={fName.error}
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => this.onChange('setLastName', value)}
                            label="Last Name"
                            error={lName.error}
                        />
                    </div>
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => this.onChange('setEmail', value)}
                        label="Work Email"
                        error={email.error}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => this.onChange('setUserName', value)}
                        label="Username"
                        error={user.error}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Password"
                        type="password"
                        onChange={(value) => this.onChange('setPass', value)}
                        error={pass.error}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Confirm Password"
                        type="password"
                        onChange={(value) => this.onChange('setConfirmPass', value)}
                        error={cfPass.error}
                    />
                </div>

                <div className={classnames("form-group")}>
                    By register an account, you agree to our <a href={LINK.TERMS} target="_blank" rel="noopener noreferrer">
                        <b>Terms and Conditions</b>
                    </a>
                </div>
            </Form >
        )
    }
}

const mapStateToProps = state => {
    return {
        signup: state.signup
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkUserAct: (user, callBackSuccess) => {
            dispatch(checkUserAct(user, callBackSuccess))
        },
        setFirstName: (data, error) => {
            dispatch(setFirstName(data, error))
        },
        setLastName: (data, error) => {
            dispatch(setLastName(data, error))
        },
        setEmail: (data, error) => {
            dispatch(setEmail(data, error))
        },
        setUserName: (data, error) => {
            dispatch(setUserName(data, error))
        },
        setPass: (data, error) => {
            dispatch(setPass(data, error))
        },
        setConfirmPass: (data, error) => {
            dispatch(setConfirmPass(data, error))
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);