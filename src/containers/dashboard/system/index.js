import React, { PureComponent } from 'react';

import {
    Tab,
    TimeLine
} from '../../../common';

import { Dashboard } from '../../../containers';

import { UikContainerVertical } from '../../../UikLayout';

import classnames from 'classnames';

import cls from './styles.module.scss';
import clsTab from '../../../common/Tab/styles.module.scss';
import clsTabContent from '../../../common/Tab/TabContent/styles.module.scss';

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

const notes = [
    {
        label: "",
        subLabel: "09/10/2018 08:00 AM",
        content: 'vxccvds fs gfsd g fsdg fs s fsdg f sgf s gfs gfsd gfsd  gfsd  gf',
        images: ["https://cdn6.aptoide.com/imgs/e/7/f/e7fa692976c6f02ec1c7303a6e622c51_icon.png?w=240",
            "https://lh3.googleusercontent.com/i8iJCYUXAUgLptP-lAVfT3NnmDOouaJqfK-PvJGYD0SAT_NiR53LMdxts0chk0EUIEM=w150",
            "http://as01.epimg.net/en/imagenes/2017/01/11/football/1484174773_906540_1484174847_noticia_normal.jpg"]
    },
    {
        label: "",
        subLabel: "09/10/2018 08:00 AM",
        content: 'vxccvds fs gfsd g fsdg fs s fsdg f sgf s mjh,jh jhg, gh ,jgh ,jg h,jhy y',
        images: ["http://images.performgroup.com/di/library/GOAL/de/d/andres-iniesta-barcelona-2017-18_160zsl848fyxa1vmo7i4di25sr.jpg?t=2131581571&w=620&h=430",
            "http://wsbuzz.com/wp-content/uploads/2018/05/sport-preview-iniesta-sub-620x385.jpg",
            "https://i.pinimg.com/originals/bb/70/05/bb7005bf8aeec2bf5bf60cbeb067aa96.jpg",
            "https://d1u4oo4rb13yy8.cloudfront.net/article/70357-zmpxegghac-1507286767.jpg"]
    },
    {
        label: "",
        subLabel: "09/10/2018 08:00 AM",
        content: 'vxccvds fs gfsd g fsdg fs s fsdg f sgf s mjh,jh jhg, gh ,jgh ,jg h,jhy y',
        images: ["http://images.performgroup.com/di/library/GOAL/de/d/andres-iniesta-barcelona-2017-18_160zsl848fyxa1vmo7i4di25sr.jpg?t=2131581571&w=620&h=430",
            "http://wsbuzz.com/wp-content/uploads/2018/05/sport-preview-iniesta-sub-620x385.jpg",
            "https://i.pinimg.com/originals/bb/70/05/bb7005bf8aeec2bf5bf60cbeb067aa96.jpg",
            "https://d1u4oo4rb13yy8.cloudfront.net/article/70357-zmpxegghac-1507286767.jpg"]
    },
    {
        label: "",
        subLabel: "09/10/2018 08:00 AM",
        content: 'vxccvds fs gfsd g fsdg fs s fsdg f sgf s mjh,jh jhg, gh ,jgh ,jg h,jhy y',
        images: ["http://images.performgroup.com/di/library/GOAL/de/d/andres-iniesta-barcelona-2017-18_160zsl848fyxa1vmo7i4di25sr.jpg?t=2131581571&w=620&h=430",
            "http://wsbuzz.com/wp-content/uploads/2018/05/sport-preview-iniesta-sub-620x385.jpg",
            "https://i.pinimg.com/originals/bb/70/05/bb7005bf8aeec2bf5bf60cbeb067aa96.jpg",
            "https://d1u4oo4rb13yy8.cloudfront.net/article/70357-zmpxegghac-1507286767.jpg"]
    },
    {
        label: "",
        subLabel: "09/10/2018 08:00 AM",
        content: 'vxccvds fs gfsd g fsdg fs s fsdg f sgf s mjh,jh jhg, gh ,jgh ,jg h,jhy y',
        images: ["http://images.performgroup.com/di/library/GOAL/de/d/andres-iniesta-barcelona-2017-18_160zsl848fyxa1vmo7i4di25sr.jpg?t=2131581571&w=620&h=430",
            "http://wsbuzz.com/wp-content/uploads/2018/05/sport-preview-iniesta-sub-620x385.jpg",
            "https://i.pinimg.com/originals/bb/70/05/bb7005bf8aeec2bf5bf60cbeb067aa96.jpg",
            "https://d1u4oo4rb13yy8.cloudfront.net/article/70357-zmpxegghac-1507286767.jpg"]
    },
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

                <UikContainerVertical className={classnames(
                    clsTab.container,
                    'col-lg-6')
                }>
                    <Tab
                        tabLinks={tabs}
                        activeTab={activeTab}
                        activeUnit={activeUnit}
                        onTabClick={(activeTab) => this.setState({ activeTab })}
                        onUnitClick={(activeUnit) => { this.setState({ activeUnit }) }}
                        onUnitOutSideClick={(node) => this.onUnitOutSideClick(node)}
                        onImageClick={() => this.showImage()}
                        onEditClick={() => this.edit()}
                    />

                    {activeTab === 2 &&
                        <div styles={{height: 'auto'}}>
                            <TimeLine
                                className={classnames(clsTabContent.tab_content_header, cls.responsive_timeline)}
                                data={notes}
                            />
                        </div>
                    }
                </UikContainerVertical>
                <div className="col-sm-2">
                </div>
                {activeUnit !== -1 && activeTab === 0 &&
                    <Tab
                        className={classnames(cls.responsive_tab)}
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