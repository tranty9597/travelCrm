import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Form
} from "../../../../../common"
import {
    signUpServiceCompany,
    clearSignUp,
} from '../../../../../actions/signUp';
import { setUserName, setPassword } from '../../../../../actions/authentication';
import {
    setServiceCompany,
} from '../../../../../actions/dashboard';
import {
    setServiceCompanyData
} from '../../../../../actions/systemSetting';
import { PATH, STATUS } from '../../../../../constant';
import classnames from 'classnames';
import cls from './styles.module.scss';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onSubmit = () => {
        this.props.history.push(PATH.CC_PAYMENT);
    }

    onSkipClick = () => {
        let {
            user,
            pass,
            fName,
            lName,
            email,
            contactEmail,
            contactName,
            contactPhone,
            address,
            address2,
            city,
            state,
            zip,
            cName,
        } = this.props.signup;
        this.props.signUpServiceCompany(user.data,
            pass.data,
            fName.data,
            lName.data,
            email.data,
            contactEmail.data,
            contactName.data,
            contactPhone.data,
            address.data,
            address2.data,
            city.data,
            state.data.label,
            zip.data,
            cName.data,
            (res) => {
                this.props.clearSignUp();
                this.props.setUserName(user.data, "");
                this.props.setPassword(pass.data, "");
                this.props.history.replace(PATH.LOG_IN);
            })
    }

    render() {
        let {
            signUpStatus
        } = this.props.signup;
        let {
            loginStatus
        } = this.props.login;
        let isSecondButtonLoading = signUpStatus === STATUS.loading || loginStatus === STATUS.loading;
        return (
            <Form
                footer
                formTitle="Mobie Access"
                buttonTitle="Sign Up Now"
                onSubmit={this.onSubmit}
                onSecondButtonClick={this.onSkipClick}
                isSecondButtonLoading={isSecondButtonLoading}
                secondButtonTitle="Skip"
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

const mapStateToProps = state => {
    return {
        signup: state.signup,
        login: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpServiceCompany: (user, pass, fName, lName, email, contactEmail, contactName, contactPhone,
            address, address2, city, state, zip, cName, callbackSuccess) => {
            dispatch(signUpServiceCompany(user, pass, fName, lName, email,
                contactEmail, contactName, contactPhone, address, address2, city, state, zip,
                cName, callbackSuccess))
        },
        setUserName: (data, error) => {
            dispatch(setUserName(data, error))
        },
        setPassword: (data, error) => {
            dispatch(setPassword(data, error))
        },
        setServiceCompany: (serviceCompanyID, serviceCompanyName) => {
            dispatch(setServiceCompany(serviceCompanyID, serviceCompanyName))
        },
        clearSignUp: () => {
            dispatch(clearSignUp())
        },
        setServiceCompanyData: (contactEmail,
            contactName,
            contactPhone,
            address,
            address2,
            city,
            state,
            zip,
            cName) => {
            dispatch(setServiceCompanyData(contactEmail,
                contactName,
                contactPhone,
                address,
                address2,
                city,
                state,
                zip,
                cName))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Payment);