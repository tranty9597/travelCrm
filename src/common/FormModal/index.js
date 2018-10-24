import React, { PureComponent } from 'react';

import { UikButton } from "../../UikLayout"

import classnames from 'classnames'

import FontAwesome from "react-fontawesome"

import cls from "./styles.module.scss";

type FormModalProps = {
    isVisible: Boolean,
    children: any,
    isEditForm: Boolean,
    formTitle: string,
    onClose: func,
    loading: Boolean,
    onCreate: func,
    onDelete: func,
    onSave: func
}

class FormModal extends PureComponent<FormModalProps> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let { isVisible, children, isEditForm, formTitle, onClose, loading, onDelete, onCreate, onSave} = this.props;
        if (isVisible) {
            return (
                <div onClick={onClose} className={classnames(cls.modalWrapper)}>
                    <React.Fragment>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={classnames("shadow", "bg-white", "rounded", "form-div", cls.formModal)}
                        >
                            <div className={classnames("container", cls.footHeadontainer, cls.header)}>
                                <h4>{formTitle}</h4>
                                <FontAwesome
                                    name='rocket'
                                    size='2x'
                                    spin
                                />
                            </div>
                            <hr />
                            <div className='container'>
                                {children}
                            </div>

                            <hr />
                            <div className={classnames("container", "row", cls.footHeadontainer)}>
                                <div className="col-9">
                                    {
                                        isEditForm && <UikButton
                                            isLoading={loading}
                                            onClick={onDelete}
                                            error
                                        >
                                            Delete
                                        </UikButton>
                                    }
                                </div>

                                <UikButton
                                    isLoading={loading}
                                    onClick={isEditForm ? onSave : onCreate}
                                    className='col-3'
                                    success
                                >
                                    {isEditForm ? "Save" : "Create"}
                                </UikButton>
                            </div>

                        </ div>

                    </React.Fragment>

                </div>
            );
        } else {
            return null
        }

    }
}

FormModal.defaultProps = {
    isVisible: true,
    onClose: () => { },
    onCreate: () => { },
    onSave: () => { },
    onDelete: () => { }
}

export default FormModal;
