import React, { PureComponent } from 'react';

import { SideBar } from '../../common';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import {
    UikContainerHorizontal,
    UikContainerVertical
} from "../../UikLayout";

import { PATH } from '../../constant';

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
        let { user } = this.props.login;
        if (!user) {
            return <Redirect to={PATH.LOG_IN} />
        }
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

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)