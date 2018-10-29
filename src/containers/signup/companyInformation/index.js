import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
    Input,
    Form
} from "../../../common";

import classnames from 'classnames';
import {
    PATH
} from "../../../constant";

class CompanyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            redirect: false
        }
    };

    onChange = (key, value) => {
        let state = this.state;
        state[key] = value;
        this.setState({ state });
    }

    onSubmit = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        let {
            name,
            address,
            city,
            state,
            zip,
            redirect
        } = this.state;
        let disabled =
            name === "" ||
            address === "" ||
            city === "" ||
            state === "" ||
            zip === "";
        if (redirect) {
            return <Redirect to={PATH.COMPANY_CONTACT} />
        }

        return (
            <Form
                footer
                formTitle="Company Information"
                buttonTitle="Next"
                onSubmit={this.onSubmit}
                disabled={disabled}
            >

                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) =>  this.onChange("name", value)}
                        label="Company Name"
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => this.onChange("address", value)}
                        label="Offical Address"
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Address 2"
                        onChange={(value) => this.onChange("address2", value)}
                    />
                </div>
                <div className={classnames(
                    "form-group",
                    "row"
                )}
                >
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => this.onChange("city", value)}
                            label="City"
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => this.onChange("state", value)}
                            label="State"
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => this.onChange("zip", value)}
                            label="Zip Code"
                        />
                    </div>
                </div>
            </Form>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logoutAction: () => {
            dispatch()
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyInformation);