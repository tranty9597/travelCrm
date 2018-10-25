import React, { PureComponent } from 'react';

import { Tab } from '../../../common';

import { Dashboard } from '../../../containers';

const dataTest = [
    {
        text: "Active Units",
        unit: [{
            name: "Furnance",
            data: [
                {
                    label: "Manufacturer",
                    manuftr: "Carrier"
                },
                {
                    label: "Model",
                    model: "MD-101"
                },
                {
                    label: "Serial Number",
                    seriNum: "ENHG224234679"
                },
                {
                    label: "Maintenance",
                    maint: "Quarterly"
                },
                {
                    label: "Activated on",
                    activedDate: "09/15/2018"
                },
            ]
        }]
    },
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
                <Tab tabLinks={dataTest} active={0} />
            </Dashboard>
        );
    }
}

export default System;