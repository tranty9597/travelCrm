import React, { PureComponent } from 'react';
import classnames from 'classnames';
import cls from './styles.module.scss';

type RadioButtonProps = {
    label?: String,
    className?: String,
    name?: String
}

class RadioButton extends PureComponent<RadioButtonProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { label, className, name, ...rest } = this.props;
        return (
            <div className={classnames(className)}>
                <label className={classnames(cls.container)}>
                    {label}
                    <input {...rest} type="radio" name={name} />
                    <span className={classnames(cls.checkmark)}></span>
                </label>
            </div>

        );
    }
}

RadioButton.defaultProps = {
    label: "",
    className: "",
    name: "",
}

export default RadioButton;