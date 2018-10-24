import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    CommonFooter,
    CommonForm
}from "../../../../../common"
import { PATH } from '../../../../../constant';

class MobieAccess extends Component {
    constructor (props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    onSubmit = () => {
        this.setState ({
            clicked: true
        })
    } 

    render() {
        let{
            clicked
        } = this.state

        if(clicked) {
            return <Link to = {
                PATH.SIGN_UP
            }
            />
        }
        return(
            <div>
                <CommonForm 
                    formTitle = "Mobie Access"
                    buttonTitle = "Sign Up Now"
                    onSubmit = {this.onSubmit}
                    skip = {
                        <div className>

                        </div>
                    }
                >
                    <div className="text-center"> 
                        <h1><b>$5.00</b></h1>
                        <p>/technician/month</p>
                    </div>
                </CommonForm>
                <CommonFooter/>
            </div>
        );
    }
}

export default MobieAccess;