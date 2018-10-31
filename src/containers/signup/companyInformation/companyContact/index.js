import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Input,
    Form
} from "../../../../common";

import {
    setContactName,
    setContactEmail,
    setContactPhone
} from '../../../../actions/signUp';

import {
    PATH
} from "../../../../constant";

import classnames from 'classnames';


const EMAIL_REGEX = /^[a-z][a-z0-9_]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g;
const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

class ConpanyContact extends Component {

    validate = (contactName, contactEmail, contactPhone) => {
        if (!contactName.data) {
            this.props.setContactName(contactName.data, "Required")
        } else if (contactName.data.length > 50) {
            this.props.setContactName(contactName.data, "Max Length Is 50")
        }
        if (!contactPhone.data) {
            this.props.setContactPhone(contactPhone.data, "Required")
        } else if (contactPhone.data.length > 20) {
            this.props.setContactPhone(contactPhone.data, "Max Length Is 20")
        } else if (contactPhone.data.match(PHONE_REGEX)) {
            let formatPhone = contactPhone.data.replace(PHONE_REGEX, "$1-$2-$3");
            this.props.setContactPhone(formatPhone, contactPhone.error)
        } else {
            this.props.setContactPhone(contactPhone.data, "Invalid Phone Number")
        }
        if (!contactEmail.data) {
            this.props.setContactEmail(contactEmail.data, "Required")
        } else if (contactEmail.data.length > 50) {
            this.props.setContactEmail(contactEmail.data, "Max length is 50")
        }
        if (!contactEmail.data.match(EMAIL_REGEX)) {
            this.props.setContactEmail(contactEmail.data, "Invalid Email Address")
        }
        setTimeout(this.onSubmit, 200);
    }

    onChange = (key, value) => {
        this.props[key](value);
    }

    onSubmit = () => {
        let {
            contactName,
            contactEmail,
            contactPhone,
        } = this.props.signup;
        if (!contactName.error && !contactEmail.error && !contactPhone.error) {
            this.props.history.push(PATH.PAYMENT)
        }
    }

    render() {
        let {
            contactName,
            contactEmail,
            contactPhone,
        } = this.props.signup;

        let disabled =
            contactName.data === "" ||
            contactEmail.data === "" ||
            contactPhone.data === '';

        return (
            <Form
                formTitle="Company Contact"
                buttonTitle="Next"
                footer
                onSubmit={() => this.validate(contactName,
                    contactEmail,
                    contactPhone)}
                disabled={disabled}
            >
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => this.onChange('setContactName', value)}
                        label="Company Contact"
                        error={contactName.error}
                        value={contactName.data}
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(value) => this.onChange('setContactPhone', value)}
                        label="Company Phone"
                        error={contactPhone.error}
                        value={contactPhone.data}
                    />
                </div>
                <div className={classnames("form-group")} >
                    <Input
                        onChange={(value) => this.onChange('setContactEmail', value)}
                        label="Company Email Address"
                        error={contactEmail.error}
                        value={contactEmail.data}
                    />
                </div>
            </Form >
        )
    }
}

const mapStateToProps = state => {
    return {
        signup: state.signup
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setContactName: (data, error) => {
            dispatch(setContactName(data, error))
        },
        setContactEmail: (data, error) => {
            dispatch(setContactEmail(data, error))
        },
        setContactPhone: (data, error) => {
            dispatch(setContactPhone(data, error))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConpanyContact)