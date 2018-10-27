import React, { PureComponent } from 'react';

import { SideBar } from '../../common';

import {
    UikContainerHorizontal,
    UikContainerVertical
} from "../../UikLayout";

import classnames from 'classnames';

import cls from "./styles.module.scss"

const menuLinks = [
    {
        text: "Appointments"
    },
    {
        text: "Customers"
    },
    {
        text: "Technicians"
    },
    {
        text: "System Settings"
    },
]

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { children } = this.props;
        return (
            <UikContainerHorizontal>
                <SideBar
                    listMenu={menuLinks}
                    title="MENU"
                />

                <UikContainerVertical className={classnames(cls.childrenWraper, cls.responsive_container)} >
                    {children}
                </UikContainerVertical>
            </UikContainerHorizontal>

        );
    }
}

export default Dashboard;