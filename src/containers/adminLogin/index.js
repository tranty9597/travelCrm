import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Input,
    Select,
    Form
} from "../../common";


import classnames from 'classnames';
import cls from './styles.module.scss';

import { PATH } from "../../constant";

const dataTest = [
    {
        value: 1,
        label: "SOS Heating and Cooling, LLC"
    },
    {
        value: 2,
        label: "SOS Constractor"
    }
]

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
            <Form
                formTitle="Log In"
                buttonTitle="Log In"
                onSubmit={this.onSubmit}
                footer
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
                        onChange={(value) => { this.setState({ user: value }) }}
                        label="Username"
                        showHint
                        hintData={dataTest}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Password"
                        type="password"
                        onChange={(value) => { this.setState({ pass: value }) }}
                    />
                </div>
                <div className="form-group">
                    <Select
                        className={cls.form_select}
                        label="HVAC Company"
                        options={dataTest}
                        onChange={(value) => { this.setState({ HVACCompany: value }) }}
                    />
                </div>
            </Form>
        );
    }
}

export default AdminLogIn;