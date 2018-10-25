import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Input,
    Form
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
            <Form
                formTitle="Company Contact"
                buttonTitle="Next"
                footer
                onSubmit={this.onSubmit}
                disabled={disabled}
            >
                <div className="form-group">
                    <Input
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
                    <Input
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
                    <Input
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
            </Form >
        )
    }
}

export default (ConpanyContact)