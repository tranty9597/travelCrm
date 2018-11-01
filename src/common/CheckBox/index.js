import React, { PureComponent } from 'react';

import { UikCheckbox } from '../../UikLayout';

import classnames from 'classnames';

import cls from './styles.module.scss';

type CheckBoxProps = {
    success?: Boolean,
    className?: String,
}

class CheckBox extends PureComponent<CheckBoxProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let {
            success,
            className,
            ...rest
        } = this.props;
        return (
            <UikCheckbox
                {...rest}
                className={classnames(success && cls.success, className)}
            />
        );
    }
}

CheckBox.defaultProps = {
    success: false,
    className: ""
}

export default CheckBox;