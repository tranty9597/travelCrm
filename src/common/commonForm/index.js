import React, { PureComponent } from 'react';
import { UikButton } from '../../UikLayout';

import "./styles.css";

class CommonForm extends PureComponent {

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
            jumbotronStyle
        } = this.props;
        return (
            <div className="form-div-container">
                <div className={"container jumbotron shadow mb-5 bg-white rounded form-div " + jumbotronStyle}>
                    <div className="d-flex justify-content-center align-items-center form-div-title">
                        <h2>{formTitle}</h2>
                    </div>
                    {children}
                    <div className="form-group form-btn-submit">
                        <UikButton
                            className={!disabled ? "btn-block btn-primary" : "btn-block"}
                            contentClassName="justify-content-center"
                            onClick={this.onSubmit}
                            disabled={disabled}
                            isLoading={isLoading}
                        >
                            {buttonTitle}
                        </UikButton>
                        {skip}
                    </div>
                </ div>
                {afterButton}
            </div>
        );
    }
}

CommonForm.defaultProps = {
    formTitle: "",
    buttonTitle: "",
    isLoading: false,
    onSubmit: () => { },
    children: null,
    afterButton: null
}

export default CommonForm;
