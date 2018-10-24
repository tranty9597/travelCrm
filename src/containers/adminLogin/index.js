import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    CommonInput,
    CommonForm,
    CommonFooter
} from "../../common";

import { PATH } from "../../constant";

const dataTest = []

class AdminLogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            pass: "",
            HVACCompany: "",
            isLoading: false
        }
    }


    onSubmit = () => {
        this.setState({ isLoading: true })
        setTimeout(() => {
            this.setState({ isLoading: false })

        }, 2000);
    }

    render() {
        let {
            user,
            pass,
            HVACCompany,
            isLoading
        } = this.state;
        let disabled = user === "" || 
        pass === "" || HVACCompany === "";
        // if (this.props.AdminLogIn.) {
        //     return <Redirect to={PATH.DASH_BOARD} />
        // }
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
                            Don't hava an account? <Link to={PATH.SIGN_UP} /> <b> Sign up now</b>
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
                    <div className="form-group">
                        <CommonInput
                            label="HVAC Company"
                            type="text"
                            onChange={(value) => { this.setState({ HVACCompany: value }) }}
                        />
                    </div>
                </CommonForm>
                <CommonFooter />
            </div>
        );
    }
}

export default AdminLogIn;