import React from 'react'

import { Row, Col } from "react-bootstrap"
import { FormModal, Input, } from "../../../../common"


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
                <Input label="Customer" />
                <Input label="Facility" />
                <Row>
                    <Col lg={5}>
                        <Input value={""} label="Date" />
                    </Col>
                    <Col lg={3}>
                        <Input label="From" />
                    </Col>
                    <Col lg={3}>
                        <Input label="To" />
                    </Col>
                </Row>


                <Input label="Technician" />
                <Input type="textArea" label="Description" />

            </FormModal >
        )
    }
}

export default ApptFormModal