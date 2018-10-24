import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Input,
    Form
} from "../../../common";

import classnames from 'classnames';

class CompanyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cName: "",
            address: "",
            address2: "",
            city: "",
            state: "",
            zCode: ""
        }
    };

    onSubmit = () => {

    }

    render() {
        let {
            cName,
            address,
            city,
            state,
            zCode
        } = this.state;
        let disabled =
            cName === "" ||
            address === "" ||
            city === "" ||
            state === "" ||
            zCode === "";

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
                        onChange={(value) => { this.setState({ cName: value }) }}
                        label="Company Name"
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => { this.setState({ address: value }) }}
                        label="Offical Address"
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Address 2"
                        onChange={(value) => { this.setState({ address2: value }) }}
                    />
                </div>
                <div className={classnames(
                    "form-group",
                    "row"
                )}
                >
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => { this.setState({ city: value }) }}
                            label="City"
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => { this.setState({ state: value }) }}
                            label="State"
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => { this.setState({ zCode: value }) }}
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