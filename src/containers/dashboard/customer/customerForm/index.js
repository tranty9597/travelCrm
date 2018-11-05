import React from 'react'

import { connect } from 'react-redux';
import {
    setCustomerName,
    setCustomerAddress,
    setCustomerAddress2,
    setCustomerCity,
    setCustomerStateID,
    setCustomerZip,
    setCustomerContact,
    setCustomerPhone,
    setCustomerEmail,
    setCustomerTypeID,
    addCustomer
} from '../../../../actions/dashboard';

import { FormModal, Input, Select, RadioButton } from "../../../../common";
import { STATES, REGEX, STATUS } from '../../../../constant';
import classnames from 'classnames';

type ApptFormModalProps = {
    isVisible: Boolean,
    isEditForm: Boolean,
    onClose: func,
    activeItem: Object
}

class CustomerForm extends React.Component<ApptFormModalProps> {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        }
    }

    onChange = (key, value) => {
        this.props[key](value, "");
    }

    onSubmit = () => {
        let {
            customerName, customerAddress, customerAddress2, customerCity,
            customerZip, customerContact, customerPhone, customerEmail,
            customerStateID, customerTypeID
        } = this.props.dashboard;
        if (!customerName.error && !customerAddress.error && !customerCity.error
            && !customerZip.error && !customerContact.error && !customerPhone.error && !customerEmail.error) {
            this.props.addCustomer(
                customerName, customerAddress, customerAddress2, customerCity,
                customerZip, customerContact, customerPhone, customerEmail,
                customerStateID, customerTypeID,
                (res) => {
                    if (res.IsError) {
                        alert(res.message)
                    } else {
                        alert(res.message)
                        this.props.onAddSuccess();
                    }
                }
            );
        }
    }

    validate = (customerName, customerAddress, customerCity, customerZip, customerContact, customerPhone, customerEmail) => {

        if (!customerName.data) {
            this.props.setCustomerName(customerName.data, "Required")
        } else if (customerName.data.length > 50) {
            this.props.setCustomerName(customerName.data, "Max Length is 50")
        }
        if (!customerAddress.data) {
            this.props.setCustomerAddress(customerAddress.data, "Required")
        } else if (customerAddress.data.length > 100) {
            this.props.setCustomerAddress(customerAddress.data, "Max Length is 100")
        }
        if (!customerCity.data) {
            this.props.setCustomerCity(customerCity.data, "Required")
        } else if (customerCity.data.length > 50) {
            this.props.setCustomerCity(customerCity.data, "Max Length is 50")
        }
        if (!customerZip.data) {
            this.props.setCustomerZip(customerZip.data, "Required")
        } else if (customerZip.data.length > 5) {
            this.props.setCustomerZip(customerZip.data, "Max Length is 5")
        }
        if (!customerZip.data.match(REGEX.NUMBER_REGEX)) {
            this.props.setCustomerZip(customerZip.data, "Invalid Zip Code");
        }
        if (!customerContact.data) {
            this.props.setCustomerContact(customerContact.data, "Required")
        } else if (customerName.data.length > 50) {
            this.props.setCustomerContact(customerContact.data, "Max Length is 50")
        }
        if (!customerPhone.data) {
            this.props.setCustomerPhone(customerPhone.data, "Required")
        } else if (customerPhone.data.length > 20) {
            this.props.setCustomerPhone(customerPhone.data, "Max Length is 20")
        }
        if (!customerPhone.data.match(REGEX.PHONE_REGEX)) {
            this.props.setCustomerPhone(customerPhone.data, "Invalid Phone Number")
        }
        if (!customerEmail.data) {
            this.props.setCustomerEmail(customerEmail.data, "Required")
        } else if (customerEmail.data.length > 50) {
            this.props.setCustomerEmail(customerEmail.data, "Max Length is 50")
        }
        if (!customerEmail.data.match(REGEX.EMAIL_REGEX)) {
            this.props.setCustomerEmail(customerEmail.data, "Invalid Email")
        }
        setTimeout(this.onSubmit, 200);
    }

    render() {
        let { isVisible, isEditForm, onClose } = this.props;
        let {
            customerName,
            customerAddress,
            customerAddress2,
            customerCity,
            customerZip,
            customerContact,
            customerPhone,
            customerEmail,
            customerTypeID,
            addCustomerStatus
        } = this.props.dashboard;
        let isLoading = addCustomerStatus === STATUS.loading;

        return (
            <FormModal
                loading={isLoading}
                isVisible={isVisible}
                isEditForm={isEditForm}
                formTitle={isEditForm ? "Edit Customer" : "New Customer"}
                onClose={onClose}
                onCreate={() => this.validate(
                    customerName,
                    customerAddress,
                    customerCity,
                    customerZip,
                    customerContact,
                    customerPhone,
                    customerEmail
                )}
            >
                <div className={classnames('form-group row col')}>
                    <RadioButton
                        checked={customerTypeID.data === 1}
                        name="customer"
                        label="Commercial"
                        onChange={() => this.onChange('setCustomerTypeID', 1)}
                    />
                    <RadioButton
                        checked={customerTypeID.data === 2}
                        name="customer"
                        label="Residential"
                        onChange={() => this.onChange('setCustomerTypeID', 2)}

                    />
                </div>
                <Input
                    label="Customer"
                    onChange={(value) => this.onChange('setCustomerName', value)}
                    value={customerName.data}
                    error={customerName.error}
                />
                <Input
                    label="Address"
                    onChange={(value) => this.onChange('setCustomerAddress', value)}
                    value={customerAddress.data}
                    error={customerAddress.error}
                />
                <Input
                    label="Address2"
                    onChange={(value) => this.onChange('setCustomerAddress2', value)}
                    value={customerAddress2.data}
                    error={customerAddress2.error}
                />
                <div className={classnames('form-group row')}>
                    <div className={classnames('col')}>
                        <Input
                            label="City"
                            onChange={(value) => this.onChange('setCustomerCity', value)}
                            value={customerCity.data}
                            error={customerCity.error}
                        />
                    </div>
                    <div className={classnames('col')}>
                        <Select
                            options={STATES}
                            label="State"
                            onChange={(value) => this.onChange('setCustomerStateID', value.label)}
                        />
                    </div>
                    <div className={classnames('col')}>
                        <Input
                            label="Zip"
                            onChange={(value) => this.onChange('setCustomerZip', value)}
                            value={customerZip.data}
                            error={customerZip.error}
                        />
                    </div>
                </div>

                <Input
                    label="Contact"
                    onChange={(value) => this.onChange('setCustomerContact', value)}
                    value={customerContact.data}
                    error={customerContact.error}
                />
                <Input
                    label="Phone"
                    onChange={(value) => this.onChange('setCustomerPhone', value)}
                    value={customerPhone.data}
                    error={customerPhone.error}
                />
                <Input
                    label="Email Address"
                    onChange={(value) => this.onChange('setCustomerEmail', value)}
                    value={customerEmail.data}
                    error={customerEmail.error}
                />
            </FormModal >
        )
    }
}


const mapStateToProps = state => {
    return {
        dashboard: state.dashboard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCustomerName: (data, error) => {
            dispatch(setCustomerName(data, error))
        },
        setCustomerAddress: (data, error) => {
            dispatch(setCustomerAddress(data, error))
        },
        setCustomerAddress2: (data, error) => {
            dispatch(setCustomerAddress2(data, error))
        },
        setCustomerCity: (data, error) => {
            dispatch(setCustomerCity(data, error))
        },
        setCustomerStateID: (data, error) => {
            dispatch(setCustomerStateID(data, error))
        },
        setCustomerZip: (data, error) => {
            dispatch(setCustomerZip(data, error))
        },
        setCustomerContact: (data, error) => {
            dispatch(setCustomerContact(data, error))
        },
        setCustomerPhone: (data, error) => {
            dispatch(setCustomerPhone(data, error))
        },
        setCustomerEmail: (data, error) => {
            dispatch(setCustomerEmail(data, error))
        },
        setCustomerTypeID: (data, error) => {
            dispatch(setCustomerTypeID(data, error))
        },
        addCustomer: (customerName, customerAddress, customerAddress2, customerCity,
            customerZip, customerContact, customerPhone, customerEmail,
            customerStateID, customerTypeID, callBackSuccess) => {
            dispatch(addCustomer(customerName, customerAddress, customerAddress2, customerCity,
                customerZip, customerContact, customerPhone, customerEmail,
                customerStateID, customerTypeID, callBackSuccess));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomerForm)