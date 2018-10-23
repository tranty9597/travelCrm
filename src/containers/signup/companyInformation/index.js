import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
    CommonInput,
    CommonForm,
    CommonFooter
} from "../../../common";

import {
    PATH
} from "../../../constant";

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
        this.setState({
            clicked: true
        })
    }

    render() {
        let {
            cName,
            address,
            city,
            state,
            zCode,
            clicked
        } = this.state;
        let disabled =
            cName === "" ||
            address === "" ||
            city === "" ||
            state === "" ||
            zCode === "";
        if (clicked) {
            return <Link to={
                PATH.COMPANY_CONTACT
            }
            />
        }


        return (
            <div>
                <CommonForm
                    formTitle="Company Information"
                    buttonTitle="Next"
                    onSubmit={this.onSubmit}
                    disabled={disabled}
                >

                    <div className="form-group">
                        <CommonInput
                            onChange={(value) => { this.setState({ cName: value }) }}
                            label="Company Name"
                        />
                    </div>
                    <div className="form-group">
                        <CommonInput
                            onChange={(value) => { this.setState({ address: value }) }}
                            label="Offical Address"
                        />
                    </div>
                    <div className="form-group">
                        <CommonInput
                            label="Address 2"
                            onChange={(value) => { this.setState({ address2: value }) }}
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <CommonInput
                                onChange={(value) => { this.setState({ city: value }) }}
                                label="City"
                            />
                        </div>
                        <div className="col">
                            <CommonInput
                                onChange={(value) => { this.setState({ state: value }) }}
                                label="State"
                            />
                        </div>
                        <div className="col">
                            <CommonInput
                                onChange={(value) => { this.setState({ zCode: value }) }}
                                label="Zip Code"
                            />
                        </div>
                    </div>
                </CommonForm>
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
        logoutAction: () => {
            dispatch()
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyInformation);