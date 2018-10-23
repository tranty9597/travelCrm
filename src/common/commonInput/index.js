import React, { PureComponent } from 'react';

import { UikInput } from "../../UikLayout";

import cls from "./styles.module.scss";

const ONBLUR_DELAY_TIME = 220;

class CommonInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
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
                        data.push(
                            <HintItem
                                key={indx}
                                item={dt}
                                className={hintData.length > 1 && cls["common_input-div-list-item"]}
                                onClick={(value) => { this.onChange(value) }}
                            />);
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
            ...rest
        } = this.props;
        let { focused, value } = this.state;
        let data = this.getHintData();

        return (

            <div className={cls["common_input-div-container"]}>
                <UikInput
                    onChange={(e) => this.onChange(e.target.value)}
                    onFocus={this.handleToggleFocus.bind(this, false)}
                    onBlur={this.handleToggleFocus.bind(this, true)}
                    value={value}
                    {...rest}
                />
                {
                    focused && data.length > 0 && (
                        <div className={cls["common_input-div-list-container"]}>
                            {data}
                        </div>
                    )
                }
                <div className={cls["common_input-div-error"]}>
                    {error}
                </div>
            </div>
        );
    }
}

CommonInput.defaultProps = {
    error: "",
    label: "",
    showHint: false,
    hintData: [],
    filterFieldName: [],
    type: 'text',
    value: ""
}

export default CommonInput;


//===================== HintItem ====================//
export class HintItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { item, className } = this.props;
        let renderData = [];
        let title = "";
        Object.values(item).forEach((value, indx) => {
            title = indx === 0 ? value : title;
            renderData.push(
                <div
                    key={indx}
                    className={indx === 0 ? cls["common_input-div-list-item-title"] : ""}
                >
                    {value}
                </div>
            )
        });

        return (
            <div>
                <li className={className}
                    onClick={() => this.props.onClick(title)}
                >
                    {item && renderData}
                </li>
            </div>
        );
    }
}

HintItem.defaultProps = {
    onClick: () => { },
    item: {},
}

