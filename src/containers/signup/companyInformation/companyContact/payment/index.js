import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Form
} from "../../../../../common"
import { PATH } from '../../../../../constant';
import classnames from 'classnames';
import cls from './styles.module.scss';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    onSubmit = () => {
        this.setState({
            clicked: true
        })
    }

    render() {
        let {
            clicked
        } = this.state

        if (clicked) {
            return <Link to={
                PATH.SIGN_UP
            }
            />
        }
        return (
            <Form
                footer
                formTitle="Mobie Access"
                buttonTitle="Sign Up Now"
                onSubmit={this.onSubmit}
                skip={
                    <div className={classnames(
                        "text-center",
                        "d-flex",
                        "flex-column",
                        "justify-content-between",
                        cls.text_skip)}
                        >
                        <Link to={PATH.DASH_BOARD}><b>Skip</b></Link>
                    </div>
                }
            >
                <div className={classnames(
                    "text-center",
                    cls.text_form_center
                )}>
                    <p className={classnames(cls.mobile_access_money)}>
                        $5.00
                    </p>
                    <p>/technician/month</p>
                </div>

            </Form>
        );
    }
}

export default Payment;