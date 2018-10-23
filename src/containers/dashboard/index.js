import React, { PureComponent } from 'react';

import { CommonSideBar } from '../../common';

class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <CommonSideBar />
        );
    }
}

export default Dashboard;