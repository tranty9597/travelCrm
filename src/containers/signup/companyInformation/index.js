import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Input,
    Form,
    Select
} from "../../../common";

import {
    setCompanyName,
    setAddress,
    setAddress2,
    setCity,
    setStateID,
    setZip
} from '../../../actions/signUp';

import {
    PATH,
    STATES
} from "../../../constant";
import classnames from 'classnames';
import cls from './styles.module.scss';

const NUMBER_REGEX = /^[0-9]*$/g;

class CompanyInformation extends Component {

    onChange = (key, value) => {
        this.props[key](value);
    }

    onSubmit = () => {
        let { cName, address, address2, city, state, zip } = this.props.signup;
        if (!cName.error &&
            !address.error &&
            !address2.error &&
            !city.error &&
            !state.error &&
            !state.error &&
            !zip.error) {
            this.props.history.push(PATH.COMPANY_CONTACT);
        }
    }

    validate = (cName, address, address2, city, state, zip) => {
        if (!cName.data) {
            this.props.setCompanyName(cName.data, "Required");
        } else if (cName.data.length > 50) {
            this.props.setCompanyName(cName.data, "Max length is 50");
        }
        if (!address.data) {
            this.props.setAddress(address.data, "Required");
        } else if (address.data.length > 100) {
            this.props.setAddress(address.data, "Max Length Is 100");
        }
        if (!city.data) {
            this.props.setCity(city.data, "Required");
        } else if (city.data.length > 50) {
            this.props.setCity(city.data, "Max Length Is 50");
        }
        if (!state.data.label) {
            this.props.setStateID(state.data, "Required");
        } else if (state.data.label.length > 2) {
            this.props.setStateID(state.data, "Max Length Is 2");
        }
        if (!zip.data) {
            this.props.setZip(zip.data, "Required");
        } else if (!zip.data.match(NUMBER_REGEX)) {
            this.props.setZip(zip.data, "Invalid Zip Code");
        } else if (zip.data.length > 5) {
            this.props.setZip(zip.data, "Max Length Is 5");
        }
        if (address2.data.length > 50) {
            this.props.setAddress2(zip.data, "Max Length Is 50");
        }
        setTimeout(this.onSubmit, 200);
    }

    render() {
        let {
            cName,
            address,
            address2,
            city,
            state,
            zip,
        } = this.props.signup;
        let disabled =
            !cName.data ||
            !address.data ||
            !city.data ||
            !state.data||
            !zip.data;

        return (

            <Form
                footer
                formTitle="Company Information"
                buttonTitle="Next"
                onSubmit={() => this.validate(cName,
                    address,
                    address2,
                    city,
                    state,
                    zip)}
                disabled={disabled}
            >
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => this.onChange("setCompanyName", value)}
                        label="Company Name"
                        error={cName.error}
                        value={cName.data}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => this.onChange("setAddress", value)}
                        label="Office Address"
                        error={address.error}
                        value={address.data}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        label="Address 2"
                        onChange={(value) => this.onChange("setAddress2", value)}
                        error={address2.error}
                        value={address2.data}
                    />
                </div>
                <div className={classnames(
                    "form-group",
                    "row",
                    cls.responsive_row
                )}
                >
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => this.onChange("setCity", value)}
                            label="City"
                            error={city.error}
                            value={city.data}
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Select
                            options={STATES}
                            onChange={(value) => this.onChange("setStateID", value)}
                            label="State"
                            error={state.error}
                            defaultValue={state.data}
                        />
                    </div>
                    <div className={classnames("col")}>
                        <Input
                            onChange={(value) => this.onChange("setZip", value)}
                            label="Zip Code"
                            error={zip.error}
                            value={zip.data}
                        />
                    </div>
                </div>
            </Form>
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
        setCompanyName: (data, error) => {
            dispatch(setCompanyName(data, error))
        },
        setAddress: (data, error) => {
            dispatch(setAddress(data, error))
        },
        setAddress2: (data, error) => {
            dispatch(setAddress2(data, error))
        },
        setCity: (data, error) => {
            dispatch(setCity(data, error))
        },
        setStateID: (data, error) => {
            dispatch(setStateID(data, error))
        },
        setZip: (data, error) => {
            dispatch(setZip(data, error))
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompanyInformation);