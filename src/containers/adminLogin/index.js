import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Input,
    Select,
    Form
} from "../../common";

import { UikSelectOptionValueType, UikSelectOptionType } from "../../UikLayout/UikSelect/flowTypes";
import classnames from 'classnames';
import cls from './styles.module.scss';

import { PATH } from "../../constant";

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

    getOptions = () => {
        let data =  dataTest;
        let options = [];
        let title = "";

        data.forEach((d, i) => {
            let temp = [];
            Object.values(d).forEach((value, indx) => {
                title = indx === 0 ? value : title;
                temp.push(

                    <div
                        key={`${indx + i}`}
                        className={indx === 0 ? classnames(cls["common_input-div-list-item-title"]) : ""}
                    >
                        {value}
                    </div>
                )
            });
            options.push(
                {
                    value:i,
                    label: temp
                }
            );
            
        });
        return options
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
        let optionsTest = this.getOptions();
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
                        options={optionsTest}
                        onChange={(value) => { this.setState({ HVACCompany: value }) }}
                    />
                </div>
            </Form>
        );
    }
}

export default AdminLogIn;