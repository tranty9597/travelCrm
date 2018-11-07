import React, { PureComponent } from 'react';

import { SideBar, Table } from '../../common';

import { connect } from 'react-redux';


import {
    UikContainerHorizontal,
} from "../../UikLayout";

import { PATH } from '../../constant';

import classnames from 'classnames';

import cls from "./styles.module.scss"

const menuLinks = [
    {
        id: 0,
        text: "Travel"
    },
    {
        id: 1,
        text: "Hotel"
    },
    {
        id: 2,
        text: "City"
    },
    {
        id: 3,
        text: "Tranportation"
    },
]



class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }


    onTabClick = (tab) => {
        this.setState({ activeTab: tab.id });
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
            default:
                break
        }
    }

    render() {
        let { activeTab } = this.state

        return (

            <UikContainerHorizontal>
                <SideBar
                    activeIndex={activeTab}
                    listMenu={menuLinks}
                    title="MENU"
                    onClick={(tab) => this.onTabClick(tab)}
                />
                <Table />
            </UikContainerHorizontal>

        );
    }
}

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)