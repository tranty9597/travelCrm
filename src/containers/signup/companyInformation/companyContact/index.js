import React, {
    Component
} from 'react';
import {
    Redirect,
    Link
} from 'react-router-dom';
import {
    connect
} from "react-redux";

import {
    CommonInput,
    CommonForm,
    CommonFooter
} from "../../../../common";

import {
    PATH
} from "../../../../constant";

class ConpanyContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cContact: "",
            cPhoneNumber: '',
            cEmail: "",
            clicked: false
        }
    }

    onSubmit = () => {
        this.setState({
            clicked: true
        })
    }

    render() {
        let {
            cContact,
            cPhoneNumber,
            cEmail,
            clicked
        } = this.state;

        let disabled =
            cContact === "" ||
            cPhoneNumber === '' ||
            cEmail === "";

        if (clicked) {
            return <Link to={
                PATH.COMPANY_CONTACT
            }
            />
        }

        return (
            <div>
                <CommonForm
                    formTitle="Company Contact"
                    buttonTitle="Next"
                    onSubmit={this.onSubmit}
                    disabled={disabled}
                >
                    <div className="form-group">
                        <CommonInput
                            onChange={
                                (value) => {
                                    this.setState({
                                        cContact: value
                                    })
                                }
                            }
                            label="Company Contact" />
                    </div>
                    <div className="form-group" >
                        <CommonInput
                            onChange={
                                (value) => {
                                    this.setState({
                                        cPhoneNumber: value
                                    })
                                }
                            }
                            label="Company Phone"
                        />
                    </div>
                    <div className="form-group" >
                        <CommonInput
                            onChange={
                                (value) => {
                                    this.setState({
                                        cEmail: value
                                    })
                                }
                            }
                            label="Company Email Address"
                        />
                    </div>
                </CommonForm >
                <CommonFooter />
            </div>
        )
    }
}

export default connect(

)(ConpanyContact)