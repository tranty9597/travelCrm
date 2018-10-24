import React from 'react'

import { Row, Col } from "react-bootstrap"
import { FormModal, CommonInput, } from "../../../../common"


type ApptFormModalProps = {
    isVisible: Boolean,
    isEditForm: Boolean,
    onClose: func,
    activeItem: Object
}

class ApptFormModal extends React.Component<ApptFormModalProps> {
    constructor(props){
        super(props);
        this.state ={
            activeItem: this.props.activeItem
        }
    }
    render() {
        let { isVisible, isEditForm, onClose, loading} = this.props
        return (
            <FormModal
                loading={loading}
                isVisible={isVisible}
                isEditForm={isEditForm}
                formTitle={isEditForm ? "Edit Appoinment" : "New Appoinment"}
                onClose={onClose}
            >
                <CommonInput label="Customer" />
                <CommonInput label="Facility" />
                <Row>
                    <Col lg={5}>
                        <CommonInput value={""} label="Date" />
                    </Col>
                    <Col lg={3}>
                        <CommonInput label="From" />
                    </Col>
                    <Col lg={3}>
                        <CommonInput label="To" />
                    </Col>
                </Row>


                <CommonInput label="Technician" />
                <CommonInput type="textArea" label="Description" />

            </FormModal >
        )
    }
}

export default ApptFormModal