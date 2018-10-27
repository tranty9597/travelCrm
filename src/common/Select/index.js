import React, { PureComponent } from 'react';

import { UikSelect } from "../../UikLayout";
import Input, { HintItem } from '../Input';
import cls from "./styles.module.scss";
import classnames from 'classnames';

type SelectProps = {
    error?: String,
    label?: String,
    rawOptions?: Array,
    disabled?: Boolean,
    value?: String,
    className?: String


}

class Select extends PureComponent<SelectProps> {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    onChange = (value) => {
                this.setState({ value });
                this.props.onChange(value);
            }

    render() {
                let{
                    error,
                    label,
                    options,
                    value,
                    onChange,
                    ...rest
                } = this.props

        return(
            <div className = { classnames("form_group") } >
                        <label className={cls.selectLabel}>{label}</label>
                        <UikSelect
                            //onChange={(e) => this.setState({ value: value })}
                            value={value}
                            options={options}
                            className={cls.form_select}
                            {...rest}
                        />
            </div>
        )

    }

}

export default Select;
