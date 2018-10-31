import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    UikWidget,
    UikTopBarTitle,
    UikContainerVertical
} from '../../../UikLayout';

import { setActiveSideBarTab } from '../../../actions/dashboard';

import { Form } from '../../../common';

import { Dashboard } from '../../../containers';

import classnames from 'classnames';
import clsPayment from '../../signup/companyInformation/companyContact/payment/styles.module.scss';
import cls from './styles.module.scss';

class Technician extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.setActiveSideBarTab(2);
    }

    onSubmit = () => {

    }

    render() {
        return (
            <Dashboard history={this.props.history}>
                <UikContainerVertical>
                    <UikTopBarTitle>
                        Technicians
                    </UikTopBarTitle>
                    <UikWidget>
                        <Form
                            formTitle="Mobie Access"
                            buttonTitle="Sign Up Now"
                            onSubmit={this.onSubmit}
                            className={classnames(cls.form_container)}
                        >
                            <div className={classnames(
                                "text-center",
                                clsPayment.text_form_center
                            )}>
                                <p className={classnames(clsPayment.mobile_access_money)}>
                                    $5.00
                                </p>
                                <p>/technician/month</p>
                            </div>

                        </Form>
                    </UikWidget>
                </UikContainerVertical>

            </Dashboard>

        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveSideBarTab: (tab) => {
            dispatch(setActiveSideBarTab(tab))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Technician);