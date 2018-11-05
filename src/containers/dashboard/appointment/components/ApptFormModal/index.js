import React from 'react'

import { connect } from 'react-redux';
import { getCustomers } from '../../../../../actions/dashboard';

import { FormModal, Select, TextArea } from "../../../../../common"
import classnames from 'classnames';

type ApptFormModalProps = {
    isVisible: Boolean,
    isEditForm: Boolean,
    onClose: func,
    activeItem: Object
}

class ApptFormModal extends React.Component<ApptFormModalProps> {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        }
    }

    componentDidMount() {
    }

    render() {
        let { isVisible, isEditForm, onClose, loading } = this.props;
        let { customers } = this.props.dashboard;
        return (
            <FormModal
                loading={loading}
                isVisible={isVisible}
                isEditForm={isEditForm}
                formTitle={isEditForm ? "Edit Appoinment" : "New Appoinment"}
                onClose={onClose}
            >
                <Select
                    options={[]}
                    label="Customer"
                />
                <Select
                    options={[]}
                    label="Facility"
                />
                <div className={classnames('form-group row')}>
                    <div className={classnames('col-sm-4')}>
                        <Select

                            options={[]}
                            label="Date"
                        />
                    </div>
                    <div className={classnames('col-sm-4')}>
                        <Select
                            options={[]}
                            label="From"
                        />
                    </div>
                    <div className={classnames('col-sm-4')}>
                        <Select
                            options={[]}
                            label="To"
                        />
                    </div>
                </div>



                <Select
                    options={[]}
                    label="Technician"
                />
                <TextArea rows={3} label="Description" />

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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApptFormModal)