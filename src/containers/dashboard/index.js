import React, { PureComponent } from 'react';

import { SideBar } from '../../common';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import {
    UikContainerHorizontal,
    UikContainerVertical
} from "../../UikLayout";

import {
    setActiveSideBarTab,
    setServiceCompany
} from '../../actions/dashboard';

import {
    setUser
} from '../../actions/authentication';

import { PATH } from '../../constant';

import classnames from 'classnames';

import cls from "./styles.module.scss"

const menuLinks = [
    {
        id: 0,
        text: "Appointments"
    },
    {
        id: 1,
        text: "Customers"
    },
    {
        id: 2,
        text: "Technicians"
    },
    {
        id: 3,
        text: "System Settings"
    },
]



class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.setActiveSideBarTab(0);
        let user = localStorage.getItem('username');
        let storage = JSON.parse(localStorage.getItem(user));
        if (storage.user) {
            this.props.setServiceCompany(storage.serviceCompanyID, storage.serviceCompanyName);
            this.props.setUser(
                storage.user,
                storage.username,
                storage.accessToken,
                storage.expiresInSec,
                storage.serviceCompanyID,
                storage.serviceCompanyName,
            );
        }
    }
    onTabClick = (tab) => {
        this.props.setActiveSideBarTab(tab.id);
        switch (tab.id) {
            case 0:
                this.props.history.push(PATH.APPOINTMENT)
                break;
            case 1:
                this.props.history.push(PATH.CUSTOMER)
                break;
            case 2:
                this.props.history.push(PATH.TECHNICIAN)
                break;
            case 3:
                this.props.history.push(PATH.SYSTEM_SETTING)
                break;
        }
    }

    render() {
        let { children } = this.props;
        let { user } = this.props.login;
        let { sideBarActiveTab } = this.props.dashboard;
        if (window.location.pathname === PATH.DASH_BOARD) {
            return <Redirect to={PATH.APPOINTMENT} />
        }
        return (

            <UikContainerHorizontal>
                <SideBar
                    listMenu={menuLinks}
                    title="MENU"
                    activeIndex={sideBarActiveTab && sideBarActiveTab}
                    onClick={(tab) => this.onTabClick(tab)}
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
        login: state.login,
        dashboard: state.dashboard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveSideBarTab: (sideBarActiveTab) => {
            dispatch(setActiveSideBarTab(sideBarActiveTab))
        },
        setServiceCompany: (serviceCompanyID, serviceCompanyName) => {
            dispatch(setServiceCompany(serviceCompanyID, serviceCompanyName))
        },
        setUser: (user, username, accessToken, expiresInSec, serviceCompanyID, serviceCompanyName) => {
            dispatch(setUser(user, username, accessToken, expiresInSec, serviceCompanyID, serviceCompanyName))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)