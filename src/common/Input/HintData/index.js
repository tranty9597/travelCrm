import React, { PureComponent } from 'react';

import classnames from 'classnames';

import cls from '../styles.module.scss';

type HintDataProps = {
    onClick?: Function,
    data?: Array,
    className?: String
}

class HintData extends PureComponent<HintDataProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        let {
            data,
            className
        } = this.props;
        let renderData = [];
        let title = "";

        data.forEach((d, i) => {
            let temp = [];
            Object.values(d).forEach((value, indx) => {
                title = indx === 0 ? value : title;
                temp.push(

                    <div
                        key={`${indx + i}`}
                        className={indx === 0 ? classnames(cls["common_input-div-list-item-title"]) : ""}
                    >
                        {value}
                    </div>
                )
            });
            renderData.push(
                <li
                    key={i}
                    className={
                        classnames(
                            cls["common_input-div-hint-data"],
                            data.length > 1 && cls["common_input-div-list-item"],
                            className
                        )
                    }
                    onClick={() => this.props.onClick(title)}
                >{temp}
                </li>
            );
        });


        return (
            <div className={classnames(
                cls["common_input-div-list-container"],

            )}>
                {data.length > 0 && renderData}
            </div>
        );
    }
}

HintData.defaultProps = {
    onClick: () => { },
    data: [],
    className: ""
}

export default HintData;