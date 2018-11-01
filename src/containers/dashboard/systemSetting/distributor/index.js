import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { CheckBox } from '../../../../common';

import classnames from 'classnames';

import cls from './styles.module.scss';
import clsSystem from '../styles.module.scss';

const distributor = [
    {
        name: "COMFORT PRODUCT",
        data: [
            {
                name: "CPD Bismarck - 1340 Airport Rd, Bismarck, ND 58504",
                isCheck: true
            },
            {
                name: "CPD Lenexa - 15470 W 110th St, Lenexa, KS 66219",
                isCheck: false
            },
            {
                name: "CPD Springfield - 1360 E Chestnut Exp, Springfield, MO 65802",
                isCheck: false
            }
        ]
    },
    {
        name: "FERGUSON",
        data: [
            {
                name: "Location 1 - 1340 Airport Rd, Bismarck, ND 58504",
                isCheck: false
            },
            {
                name: "Location 2 - 15470 W 110th St, Lenexa, KS 66219",
                isCheck: true
            },
            {
                name: "Location 3 - 1360 E Chestnut Exp, Springfield, MO 65802",
                isCheck: false
            }
        ]
    }
]

class Distributor extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getContent = () => {
        let content = [];
        distributor.forEach((element, indx) => {
            content.push(
                <h3
                    key={indx}
                    className={classnames(clsSystem.title)}
                >
                    {element.name}
                </h3>
            );
            element.data.forEach((data, i) => {
                content.push(
                    <div
                        key={i}
                        className={classnames("form-group")}
                    >
                        <CheckBox
                            success
                            defaultChecked={data.isCheck}
                            label={data.name}
                        />
                    </div>
                )
            })
        })
        return content;
    }

    render() {
        let content = this.getContent();
        return (
            <div className={classnames('col-sm-7 col-lg-7', clsSystem.container)} >
                {content}
            </div>
        );
    }
}

export default Distributor;