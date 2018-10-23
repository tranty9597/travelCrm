import React from "react"

import { FormModal, CommonInput } from "../../common"

class Appoinment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
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
                    sdfsdaf
                >
                    <CommonInput label="Customer" />
                    <CommonInput label="Facility" />
                    <div className='row'>
                        <div className='col-5'>
                            <CommonInput label="Date" />
                        </div>
                        <div className='col-3'>
                            <CommonInput label="From" />
                        </div>
                        <div className='col-3'>
                            <CommonInput label="To" />
                        </div>

                    </div>
                    <CommonInput label="Technician" />
                    <CommonInput type="textArea" label="Description" />

                </FormModal>
                <button onClick={this.toggleModal}>sss</button>
            </div>
        )
    }
}

export default Appoinment;