import React, { PureComponent } from 'react';

import { UikButton, UikDivider } from "../../UikLayout"

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
        let { isVisible, children, isEditForm, formTitle, onClose, loading, onDelete, onCreate, onSave } = this.props;
        if (isVisible) {
            return (
                <div onClick={onClose} className={classnames(cls.modalWrapper)}>
                    <React.Fragment>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className={classnames("shadow bg-white rounded", cls.formModal)}
                        >
                            <div className={classnames("container", cls.footHeadontainer, cls.header)}>
                                <h5>{formTitle}</h5>
                                <FontAwesome
                                    name='rocket'
                                    size='2x'
                                    spin
                                />
                            </div>
                            <UikDivider />
                            <div className={classnames('container', cls.child)}>
                                {children}
                            </div>

                            <UikDivider />
                            <div className={classnames("container align-items-center row ", cls.footHeadontainer)}>
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
