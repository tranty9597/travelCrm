import React, { PureComponent } from 'react';

import { UikSelect } from "../../UikLayout";
import cls from "./styles.module.scss";
import clsInput from "../Input/styles.module.scss";
import classnames from 'classnames';

type SelectProps = {
    error?: String,
    label?: String,
    options?: Array,
<<<<<<< HEAD
    disabled?: Boolean,
    value?: String,
    className?: String


=======
    onChange?: Function,
    className?: String,
    defaultValue?: String
>>>>>>> f88698875f041886f69357166e4c436148ebae4a
}

class Select extends PureComponent<SelectProps> {

    onChange = (value) => {
        this.props.onChange(value);
    }

    render() {
        let {
            error,
            label,
            options,
            defaultValue
        } = this.props

        return (
            <div className={classnames(cls.select_container)} >
                <label className={cls.selectLabel}>{label}</label>
                <UikSelect
                    defaultValue={defaultValue}
                    className={classnames(cls.button)}
                    options={options}
                    onChange={(value) => this.onChange(value)}
                />
                <div className={classnames(clsInput["common_input-div-error"])}>
                    {error}
                </div>
            </div>
        )

    }

}

Select.defaultProps = {
    options: [],
    error: "",
    label: "",
    onChange: () => { },
    defaultValue: ""
}

export default Select;
