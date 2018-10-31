import React, { PureComponent } from 'react';

import { SideBar } from '../../common';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import {
    UikContainerHorizontal,
    UikContainerVertical
} from "../../UikLayout";

import { setActiveSideBarTab } from '../../actions/dashboard';

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
    }
    onTabClick = (tab) => {
        this.props.setActiveSideBarTab(tab.id);
        switch (tab.id) {
            case 0:
                this.props.history.push(PATH.APPOINTMENT)
                break;
            case 1:
                this.props.history.push(PATH.SYSTEM)
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }

    render() {
        let { children } = this.props;
        let { user } = this.props.login;
        let { sideBarActiveTab } = this.props.dashboard;
        
        if(window.location.pathname === PATH.DASH_BOARD){
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)