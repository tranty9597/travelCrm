import React, { PureComponent } from 'react';

import { Tab } from '../../../common';

import { Dashboard } from '../../../containers';

const dataTest = [
    { text: "Active Units" },
    { text: "Inactive Units" },
    { text: "Notes" }
]

class System extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Dashboard>
                <Tab tabLinks={dataTest} active={0}/>
            </Dashboard>
        );
    }
}

export default System;