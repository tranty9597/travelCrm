import React, { PureComponent } from 'react';

import { SideBar } from '../../common';


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
        return (
            <SideBar
                listMenu={menuLinks}
                title="MENU"
            />

        );
    }
}

export default Dashboard;