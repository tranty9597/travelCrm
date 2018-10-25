import React, { PureComponent } from 'react';

import { UikInput } from '../../UikLayout';
import { HintData } from '../../common';
import cls from './styles.module.scss';
import classNames from 'classnames';

type InputProps = {
    error?: String,
    label?: String,
    showHint?: Boolean,
    hintData?: Array,
    filterFieldName?: Array,
    type?: String,
    value?: String
}

const ONBLUR_DELAY_TIME = 220;

class Input extends PureComponent<InputProps> {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            focused: false,
        };
    }


    getHintData = () => {
        let {
            hintData,
            showHint,
            filterFieldName
        } = this.props;
        let { value } = this.state;
        let data = [];
        let flag = false;

        if (showHint && value) {
            hintData.forEach((dt, indx) => {
                flag = false;
                let keys = [];
                if (filterFieldName.length > 0) {
                    keys = filterFieldName;
                } else {
                    keys = Object.keys(dt);
                }
                keys.forEach(f => {
                    if (flag) {
                        return false;
                    }
                    if (dt[f].toLowerCase().includes(value.toLowerCase())) {
                        data.push(dt)
                        flag = true;
                    }
                });
            });
        }

        return data;
    }

    handleToggleFocus = (isBlur) => {
        setTimeout(() => {
            let { focused } = this.state;
            this.setState({ focused: !focused });
        },
            isBlur ? ONBLUR_DELAY_TIME : 0)

    }

    onChange = (value) => {
        this.setState({ value });
        this.props.onChange(value);
    }

    render() {
        let {
            error,
            hintData,
            filterFieldName,
            showHint,
            value,
            onChange,
            ...rest
        } = this.props;
        let { focused } = this.state;
        value = value !== "" ? value : this.state.value;
        let data = this.getHintData();

        return (

            <div className={classNames(cls["common_input-div-container"])}>
                <UikInput
                    onChange={(e) => this.onChange(e.target.value)}
                    onFocus={this.handleToggleFocus.bind(this, false)}
                    onBlur={this.handleToggleFocus.bind(this, true)}
                    value={value}
                    {...rest}
                />
                {
                    focused && data.length > 0 && (
                        <HintData
                            data={data}
                            onClick={(value) => this.onChange(value)}
                        />
                    )
                }
                <div className={classNames(cls["common_input-div-error"])}>
                    {error}
                </div>
            </div>
        );
    }
}

Input.defaultProps = {
    error: "",
    label: "",
    showHint: false,
    hintData: [],
    filterFieldName: [],
    type: 'text',
    value: ""
}

export default Input;


