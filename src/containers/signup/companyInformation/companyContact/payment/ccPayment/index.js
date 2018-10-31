import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Input,
    Form
} from "../../../../../../common";
import {
    PATH
} from "../../../../../../constant";

import classnames from 'classnames';

import clsCompanyInfo from '../../../styles.module.scss';

class CCPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: "",
            cardName: "",
            expDate: "",
            cvc: ""
        }
    }
    validate = () => {

    }

    onChange = (key, value) => {
        // this.props[key](value);
    }

    onCancel = () => {
        this.props.history.goBack();
    }

    onSubmit = () => {
    }

    render() {
        let {
            cardNumber,
            cardName,
            expDate,
            cvc
        } = this.state;
        let disabled =
            cardNumber === "" ||
            cardName === "" ||
            expDate === "" ||
            cvc === "";

        return (
            <Form
                formTitle="Payment"
                buttonTitle="Complete"
                secondButtonTitle="Cancel"
                footer
                onSubmit={() => this.validate()}
                onSecondButtonClick={() => this.onCancel()}
                disabled={disabled}
            >
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(cardNumber) => this.setState({ cardNumber })}
                        label="Card Number"
                    />
                </div>
                <div className={classnames("form-group")}>
                    <Input
                        onChange={(cardName) => this.setState({ cardName })}
                        label="Cardholder Name"
                    />
                </div>
                <div className={classnames(
                    "form-group",
                    "row",
                    clsCompanyInfo.responsive_row
                )}
                >
                    <div className={classnames("col")} >
                        <Input
                            onChange={(expDate) => this.setState({ expDate })}
                            label="Exp. Date (MM/YY)"
                        />
                    </div>
                    <div className={classnames("col")} >
                        <Input
                            onChange={(cvc) => this.setState({ cvc })}
                            label="CVC"
                        />
                    </div>
                </div>
            </Form >
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CCPayment)