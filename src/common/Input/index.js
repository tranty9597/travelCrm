import React, { PureComponent } from 'react';

import { UikInput } from '../../UikLayout';
import { HintData } from '../../common';
import cls from './styles.module.scss';
import classnames from 'classnames';

type InputProps = {
    error?: String,
    label?: String,
    showHint?: Boolean,
    hintData?: Array,
    filterFieldName?: Array,
    type?: String,
    value?: String,
    onButtonClick?: Function,
    buttonLabel?: String,
    onButtonClick?: Function
}

const ONBLUR_DELAY_TIME = 220;

class Input extends PureComponent<InputProps> {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            focused: false,
        };
    }

    componentDidMount() {
        let { value } = this.props;
        this.setState({ value })
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

        return data.length === 0 ? hintData : data;
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

    onClick = (e) => {
        e.preventDefault();
        this.props.onButtonClick();
    }

    render() {
        let {
            error,
            hintData,
            filterFieldName,
            showHint,
            value,
            onChange,
            buttonLabel,
            onButtonClick,
            ...rest
        } = this.props;
        let { focused } = this.state;
        value = value !== "" ? value : this.state.value;
        let data = this.getHintData();

        return (

            <div className={classnames(cls["common_input-div-container"])}>

                <UikInput
                    onChange={(e) => this.onChange(e.target.value)}
                    onFocus={this.handleToggleFocus.bind(this, false)}
                    onBlur={this.handleToggleFocus.bind(this, true)}
                    value={value}
                    {...rest}
                />
                {buttonLabel &&
                    <a
                        href=""
                        className={classnames(cls["common_input-div-button"])}
                        onClick={(e) => this.onClick(e)}
                    >
                        {buttonLabel}
                    </a>}
                {
                    focused && data.length > 0 && (
                        <HintData
                            data={data}
                            onClick={(value) => this.onChange(value)}
                        />
                    )
                }
                <div className={classnames(cls["common_input-div-error"])}>
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
    value: "",
    buttonLabel: "",
    onButtonClick: () => {}
}

export default Input;


