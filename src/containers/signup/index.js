import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    CommonInput,
    CommonForm,
    CommonFooter
} from "../../common";

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
            <div>
                <CommonForm
                    formTitle="Sign Up"
                    buttonTitle="Let's Get Started"
                    onSubmit={this.onSubmit}
                    disabled={disabled}
                    afterButton={
                        <div className="text-center">
                            Already have an account? <Link to={PATH.LOG_IN}><b>Log in</b></Link>
                        </div>
                    }
                >
                    <div className="form-group row">
                        <div className="col">
                            <CommonInput
                                onChange={(value) => { this.setState({ fName: value }) }}
                                label="First Name"
                            />
                        </div>
                        <div className="col">
                            <CommonInput
                                onChange={(value) => { this.setState({ lName: value }) }}
                                label="Last Name"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <CommonInput
                            onChange={(value) => { this.setState({ email: value }) }}
                            label="Work Email"
                        />
                    </div>
                    <div className="form-group">
                        <CommonInput
                            onChange={(value) => { this.setState({ user: value }) }}
                            label="Username"
                        />
                    </div>
                    <div className="form-group">
                        <CommonInput
                            label="Password"
                            type="password"
                            onChange={(value) => { this.setState({ pass: value }) }}
                        />
                    </div>
                    <div className="form-group">
                        <CommonInput
                            label="Confirm Password"
                            type="password"
                            onChange={(value) => { this.setState({ cfPass: value }) }}
                        />
                    </div>

                    <div className="form-group">
                        By register an account, you agree to our <a href={LINK.TERMS} 
                        target="_blank" rel="noopener noreferrer">
                            <b>Terms and Conditions</b>
                        </a>
                    </div>
                </CommonForm >
                <CommonFooter />
            </div>
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