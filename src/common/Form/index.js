import React, { PureComponent } from 'react';

import {
    UikButton,
    UikHeadline,
    UikContent
} from '../../UikLayout';

import { Footer } from '../../common';

import classnames from 'classnames';

import "./styles.css";

type FormProps = {
    formTitle?: String;
    buttonTitle?: String;
    isLoading?: Boolean,
    onSubmit?: Function,
    children?: React.node,
    afterButton?: React.node,
    footer?: Boolean
}


class Form extends PureComponent<FormProps> {

    onSubmit = () => {
        this.props.onSubmit();
    }

    render() {
        let {
            disabled,
            children,
            formTitle,
            buttonTitle,
            isLoading,
            afterButton,
            footer
        } = this.props;
        return (
            <div
                className={classnames(
                    "d-flex",
                    "flex-column",
                    "justify-content-between",
                    "form_div_container"
                )}
            >
                <div>
                    <UikContent
                        contentCenter
                        className={classnames(
                            "shadow",
                            "mb-5",
                            "bg-white",
                            "rounded",
                            "form_div")}
                    >
                        <UikContent
                            contentCenter
                            className={classnames("form-div-title")}
                        >
                            <UikHeadline className={classnames("text-center ")}>
                                {formTitle}
                            </UikHeadline>
                        </UikContent>

                        {children}

                        <div className={classnames(
                            "form-group",
                            "form_btn_submit")}
                        >
                            <UikButton
                                className={classnames(!disabled ? "btn-block btn-primary" : "btn-block")}
                                contentClassName={classnames("justify-content-center")}
                                onClick={this.onSubmit}
                                disabled={disabled}
                                isLoading={isLoading}
                            >
                                {buttonTitle}
                            </UikButton>
                        </div>

                    </UikContent>
                    {afterButton}
                </div>
                {footer && <Footer />}
            </div>
        );
    }
}

Form.defaultProps = {
    formTitle: "",
    buttonTitle: "",
    isLoading: false,
    onSubmit: () => { },
    children: null,
    afterButton: null,
    footer: false
}

export default Form;
