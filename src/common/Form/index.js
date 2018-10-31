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
    formTitle?: String,
    buttonTitle?: String,
    secondButtonTitle?: String,
    isLoading?: Boolean,
    isSecondButtonLoading?: Boolean,
    onSubmit?: Function,
    onSecondButtonClick?: Function,
    children?: React.node,
    afterButton?: React.node,
    footer?: Boolean
}


class Form extends PureComponent<FormProps> {

    onSubmit = (e) => {
        this.props.onSubmit();
        e.preventDefault();
    }

    onSecondButtonClick = (e) => {
        this.props.onSecondButtonClick();
        e.preventDefault();
    }

    render() {
        let {
            disabled,
            children,
            secondButtonTitle,
            formTitle,
            buttonTitle,
            isLoading,
            isSecondButtonLoading,
            afterButton,
            footer
        } = this.props;
        return (
            <form
                onSubmit={(e) => this.onSubmit(e)}
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
                            <UikHeadline className={classnames("text-center",
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
                                type='submit'
                                className={classnames(!disabled ? "btn-block btn-primary" : "btn-block")}
                                contentClassName={classnames("justify-content-center")}
                                disabled={disabled}
                                isLoading={isLoading}
                            >
                                {buttonTitle}
                            </UikButton>
                            {secondButtonTitle && <div className={classnames(
                                cls.second_button)}
                            >
                                <UikButton
                                    isLoading={isSecondButtonLoading}
                                    onClick={(e) => this.onSecondButtonClick(e)}
                                >
                                    {secondButtonTitle}
                                </UikButton>

                            </div>}
                        </div>

                    </UikContent>
                    {afterButton}
                </div>
                {footer && <Footer />}
            </form>
        );
    }
}

Form.defaultProps = {
    formTitle: "",
    buttonTitle: "",
    isLoading: false,
    isSecondButtonLoading: false,
    onSubmit: () => { },
    onSecondButtonClick: () => { },
    children: null,
    afterButton: null,
    footer: false,
    secondButtonTitle: ""
}

export default Form;
