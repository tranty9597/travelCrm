import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Input,
    Form
} from "../../common";

import classnames from 'classnames';

import { PATH, LINK } from '../../constant';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            user: "",
            pass: "",
            cfPass: "",
            clicked: false
        }
    };

    onSubmit = () => {
        this.setState({ clicked: true })
    }

    render() {
        let {
            fName,
            lName,
            email,
            user,
            pass,
            cfPass,
            clicked
        } = this.state;
        let disabled =
            fName === "" ||
            lName === "" ||
            email === "" ||
            user === "" ||
            pass === "" ||
            cfPass === "";

        if (clicked) {
            return <Redirect to={PATH.COMPANY_INFORMATION} />
        }

        return (
            <Form
                footer
                formTitle="Sign Up"
                buttonTitle="Let's Get Started"
                onSubmit={this.onSubmit}
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
                            onChange={(value) => { this.setState({ fName: value }) }}
                            label="First Name"
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => { this.setState({ lName: value }) }}
                            label="Last Name"
                        />
                    </div>
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => { this.setState({ email: value }) }}
                        label="Work Email"
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => { this.setState({ user: value }) }}
                        label="Username"
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Password"
                        type="password"
                        onChange={(value) => { this.setState({ pass: value }) }}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Confirm Password"
                        type="password"
                        onChange={(value) => { this.setState({ cfPass: value }) }}
                    />
                </div>

                <div className={classnames("form-group")}>
                    By register an account, you agree to our <a href={LINK.TERMS}
                        target="_blank" rel="noopener noreferrer">
                        <b>Terms and Conditions</b>
                    </a>
                </div>
            </Form >
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);