import React, { PureComponent } from 'react';

import classnames from 'classnames';

import cls from './styles.module.scss';
import clsSystem from '../styles.module.scss';
import Invoice from './invoice';
import { Input } from '../../../../common';

import { UikContainerHorizontal, UikButton } from '../../../../UikLayout';

const billing = [
    {
        text: "25 Active Users",
        date: "10/05/2018",
        seri: "1342422",
        money: 125.00,
        paid: false
    },
    {
        text: "20 Active Users",
        date: "09/05/2018",
        seri: "20180120",
        money: 100.00,
        paid: true
    }
]

class Billing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            setCardholderName: "",
            setCardNumber: "",
            setCVC: "",
            setExpDate: ""
        };
    }

    onChangePaymentClick = () => {
        this.setState({ disabled: !this.state.disabled })
    }

    onChange = (key, value) => {
        let state = this.state;
        state[key] = value;
        this.setState({ state });
    }

    onSave = () => {

    }

    render() {
        let { disabled } = this.state;
        return (
            <UikContainerHorizontal>
                <div className={classnames('col')}>
                    <h3 className={classnames(clsSystem.title)}>
                        Payment Method
                        </h3>
                    <div className={classnames('form-group')}>
                        <Input
                            label="Card Number"
                            buttonLabel={disabled && "Change"}
                            disabled={disabled}
                            onButtonClick={() => this.onChangePaymentClick()}
                            onChange={(value) => this.onChange('setCardNumber', value)}
                            placeholder={disabled && "VISA 7741"}
                        />
                    </div>
                    {
                        disabled ||
                        <div>
                            <div className={classnames('form-group')}>
                                <Input
                                    label="Cardholder Name"
                                    onChange={(value) => this.onChange('setCardholderName', value)}
                                />
                            </div>
                            <div className={classnames('form-group', cls.row)}>
                                <div className={classnames(cls.inline)} >
                                    <Input
                                        label="Exp. Date (MM/YY)"
                                        onChange={(value) => this.onChange('setExpDate', value)}
                                    />
                                </div>
                                <div className={classnames(cls.inline)} >
                                    <Input
                                        label="CVC"
                                        onChange={(value) => this.onChange('setCVC', value)}
                                    />
                                </div>
                            </div>
                            <div className={classnames('form-group', cls.button_group)}>
                                <UikButton
                                    onClick={() => this.onChangePaymentClick()}
                                    className={classnames('col', cls.button, cls.cancel)}
                                >
                                    Cancel
                                </UikButton>
                                <UikButton
                                    success
                                    onClick={() => {
                                        this.onChangePaymentClick();
                                        this.onSave()
                                    }}
                                    className={classnames('col', cls.button)}
                                >
                                    Save
                                </UikButton>
                            </div>
                        </div>
                    }
                </div>
                <div className={classnames('col')}>
                    <h3 className={classnames(clsSystem.title)}>
                        Invoice History
                        </h3>
                    <div className={classnames(cls.invoice)}>
                        <Invoice data={billing} />
                    </div>
                </div>
            </UikContainerHorizontal>
        );
    }
}

export default Billing;