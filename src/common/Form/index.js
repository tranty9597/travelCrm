import React, { PureComponent } from 'react';

import {
    UikButton,
    UikHeadline,
    UikContent
} from '../../UikLayout';

import { Footer } from '../../common';

import classnames from 'classnames';

import cls from "./styles.module.scss";

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
            skip,
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
                    cls.form_div_container
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
                            cls.form_div)}
                    >
                        <UikContent
                            contentCenter
                            className={classnames(cls.form_div_title)}
                        >
                            <UikHeadline className={classnames("text-center ",
                            cls.text_header)}>
                                {formTitle}
                            </UikHeadline>
                        </UikContent>

                        {children}

                        <div className={classnames(
                            "form-group",
                            cls.form_btn_submit)}
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
                            {skip}
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
