import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import {
    setCompanyName,
    setAddress,
    setAddress2,
    setCity,
    setStateID,
    setZip,
    setContactEmail,
    setContactName,
    setContactPhone
} from '../../../../actions/systemSetting';

import { UikHeadline } from '../../../../UikLayout';

import { Input, Select } from '../../../../common';

import { STATES } from '../../../../constant';

import classnames from 'classnames';
import cls from './styles.module.scss';
import clsCInfor from '../../../signup/companyInformation/styles.module.scss';

class CompanyProfile extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChange = (key, value) => {
        this.props[key](value);
    }

    render() {
        let {
            cName,
            address,
            address2,
            city,
            state,
            zip,
            contactEmail,
            contactName,
            contactPhone
        } = this.props.systemSetting
        return (
            <div className={classnames('col-sm-7 col-lg-7', cls.container)}>
                <div>
                    <h3 className={classnames(cls.title)}>
                        Company Information
                    </h3>
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
                        clsCInfor.responsive_row
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
                </div>
                <div>
                    <h3 className={classnames(cls.title)}>
                        Company Contact
                    </h3>
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemSetting: state.systemSetting
    }
}

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
)(CompanyProfile)