import React, {PureComponent} from 'react';
import {UikButton} from '../../UikLayout';
import "./styles.css";

class CommonPayment extends PureComponent {

    onSubmit = () => {
        this.props.onSubmit();
    }

    onSkip = () => {
        this.props.onSkip();
    }

    render() {
        let{
            c
        }
    }
}
