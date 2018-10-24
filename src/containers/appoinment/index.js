import React from "react"

import { Input, Table } from "../../common"

import { UikButton } from "../../UikLayout"

import { Row, Col } from "react-bootstrap"
import { ProcessLayout } from "../../layout";
import { ApptFormModal } from "./components";




class Appoinment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isEditForm: false,
            activeItem: {}
        }
    }
    showCreateForm = () => {
        this.setState({ activeItem: {}, showModal: true, isEditForm: false })
    }
    showEditForm = (activeItem) => {

        this.setState({ activeItem, showModal: true, isEditForm: true })

    }
    renderToolbar = () => {
        return (
            <div className='container-fluid'>
                <Row>
                    <Col md={6} lg={3}>
                        <h5 style={{ lineHeight: '2.2rem' }}>Appoinment</h5>
                    </Col>
                    <Col md={6} lg={6}>
                        <Row>
                            <Col lg={7}>
                                <Input />
                            </Col>
                            <Col lg={5}>
                                <Input />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={12} lg={3} className='d-flex justify-content-end'>
                        <UikButton onClick={this.showCreateForm} success>New Appoinment</UikButton>
                    </Col>
                </Row>
            </div>
        )
    }


    render() {
        let { isEditForm, showModal } = this.state
        return (
            <div className='container-fluid '>

                <ApptFormModal
                    isVisible={showModal}
                    isEditForm={isEditForm}
                    onClose={this.toggleModal}
                />

                <ProcessLayout>
                    {this.renderToolbar()}
                    <Table type={1} onEdit={this.showEditForm} />
                </ProcessLayout>
            </div>
        )
    }
    toggleModal = () => {
        let { showModal } = this.state;
        this.setState({ showModal: !showModal })
    }
}

export default Appoinment;