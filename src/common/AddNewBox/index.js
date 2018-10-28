import React, { PureComponent } from 'react';

import classnames from 'classnames';

import cls from './styles.module.scss';

import {
    UikContentItem,
    UikButton
} from '../../UikLayout';

type AddNewBoxProps = {
    label?: String,
    className?: String
}

class AddNewBox extends PureComponent<AddNewBoxProps> {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    onClick = (value) => {
        this.setState({ value: ""})
        this.props.onClick(value);
    }

    render() {
        let {
            label,
            className
        } = this.props;
        let { value } = this.state;
        return (
            <UikContentItem className={classnames(cls.container)}>
                < div className={classnames(cls.label, className)} >
                    {label}
                </div >
                <textarea
                    value={value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                    rows={3}
                    className={classnames(cls.box_textarea, cls.textarea)}
                />

                <UikButton
                    success
                    className={classnames(cls.button)}
                    onClick={() => this.onClick(value)}
                >
                    Save
                </UikButton>
            </UikContentItem >

        );
    }
}

AddNewBox.defaultProps = {
    label: "",
    className: "",
    onClick: () => { }
}

export default AddNewBox;