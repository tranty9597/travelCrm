import React from "react"

import {
    FormModal,
    Input
} from "../../common"

class Appoinment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isEditForm: false
        }
    }
    toggleModal = () => {
        let { showModal } = this.state;
        this.setState({ showModal: !showModal })
    }
    render() {
        let { showModal, isEditForm } = this.state;
        let { loading } = this.props
        return (
            <div>
                <FormModal
                    loading={loading}
                    isVisible={showModal}
                    isEditForm={isEditForm}
                    formTitle={isEditForm ? "Edit Appoinment" : "New Appoinment"}
                    onClose={this.toggleModal}
                >
                    <Input label="Customer" />
                    <Input label="Facility" />
                    <div className='row'>
                        <div className='col-5'>
                            <Input label="Date" />
                        </div>
                        <div className='col-3'>
                            <Input label="From" />
                        </div>
                        <div className='col-3'>
                            <Input label="To" />
                        </div>

                    </div>
                    <Input label="Technician" />
                    <Input type="textArea" label="Description" />

                </FormModal>
                <button onClick={this.toggleModal}>sss</button>
            </div>
        )
    }
}

export default Appoinment;