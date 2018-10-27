import React, { PureComponent } from 'react';

import { Tab } from '../../../common';

import { Dashboard } from '../../../containers';

import { UikContainerHorizontal } from '../../../UikLayout';

import classnames from 'classnames';

const tabs = [
    {
        text: "Active Units",
        unit: [
            {
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
            },
            {
                name: "Air Handler",
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
            }
        ]
    },
    { text: "Inactive Units" },
    { text: "Notes" }
]

const units = [
    [
        {
            text: "Parts",
            unit: [
                {
                    name: "",
                    data: [
                        {
                            label: "Type",
                            type: "Motors"
                        },
                        {
                            label: "Part",
                            part: "Blower Motor"
                        },
                        {
                            label: "Quantity",
                            quantity: "1"
                        }
                    ]
                },
                {
                    name: "",
                    data: [
                        {
                            label: "Type",
                            type: "Filters"
                        },
                        {
                            label: "Part",
                            part: "10x10x20"
                        },
                        {
                            label: "Quantity",
                            quantity: "5"
                        }
                    ]
                },
            ]
        },
        { text: "Records" }
    ],
    [
        {
            text: "Parts",
            unit: [
                {
                    name: "",
                    data: [
                        {
                            label: "Type",
                            type: "Motors1"
                        },
                        {
                            label: "Part",
                            part: "Blower Motor1"
                        },
                        {
                            label: "Quantity",
                            quantity: "11"
                        }
                    ]
                },

                {
                    name: "",
                    data: [
                        {
                            label: "Type",
                            type: "Filters1"
                        },
                        {
                            label: "Part",
                            part: "10x10x201"
                        },
                        {
                            label: "Quantity",
                            quantity: "51"
                        }
                    ]
                },
            ]
        },
        { text: "Records" }
    ],
]

class System extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            activeUnit: -1,
            activeUnitTab: 0
        };
        this.tabPartContainer = null;
    }

    onUnitOutSideClick = (node) => {
        if (!this.tabPartContainer.contains(node)) {
            this.setState({ activeUnit: -1 });
        }
    }

    showImage = () => {
        alert('abc')
    }

    edit = () => {
        alert('def')

    }

    render() {
        let {
            activeTab,
            activeUnit,
            activeUnitTab,
        } = this.state;
        return (
            <Dashboard>
                <Tab
                    className="col-lg-6"
                    tabLinks={tabs}
                    activeTab={activeTab}
                    activeUnit={activeUnit}
                    onTabClick={(activeTab) => this.setState({ activeTab })}
                    onUnitClick={(activeUnit) => { this.setState({ activeUnit }) }}
                    onUnitOutSideClick={(node) => this.onUnitOutSideClick(node)}
                    onImageClick={() => this.showImage()}
                    onEditClick={() => this.edit()}
                />
                <div className="col-sm-2">
                </div>
                {activeUnit !== -1 && activeTab === 0 &&
                    <Tab
                        domRef={(inst) => this.tabPartContainer = inst}
                        renderPart
                        tabLinks={units[activeUnit]}
                        activeTab={activeUnitTab}
                        onTabClick={(activeUnitTab) => this.setState({ activeUnitTab })}
                        onEditClick={() => this.edit()}
                    />}
            </Dashboard>
        );
    }
}

export default System;