import React, { Component } from 'react';

import {
    Tab,
    TimeLine,
    AddNewBox,
    TabWidget
} from '../../../common';

import { Dashboard } from '../../../containers';
import { connect } from 'react-redux'
import {
    UikContainerVertical,
    UikContainerHorizontal
} from '../../../UikLayout';

import {
    setActiveSideBarTab
} from '../../../actions/dashboard';

import Repair from './repair';

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

const services = [
    {
        type: 'Repair',
        date: '09/08/2018',
        data:
        {
            problem: 'fdsafdnjvncsakv nja  njva njvkdsa d nak',
            solution: {
                text: 'vnjvnj nv kj kn a jda nfdjkas nfdjska nf',
                images: [
                    "http://images.performgroup.com/di/library/GOAL/de/d/andres-iniesta-barcelona-2017-18_160zsl848fyxa1vmo7i4di25sr.jpg?t=2131581571&w=620&h=430",
                    "http://wsbuzz.com/wp-content/uploads/2018/05/sport-preview-iniesta-sub-620x385.jpg",
                    "https://i.pinimg.com/originals/bb/70/05/bb7005bf8aeec2bf5bf60cbeb067aa96.jpg",
                    "https://d1u4oo4rb13yy8.cloudfront.net/article/70357-zmpxegghac-1507286767.jpg"
                ]
            },
            comment: [
                {
                    text: 'dfaf af wf fdsafd fd af d fd sa s afsfd',
                    date: '09/15/2018'
                }
            ]
        }
    },
    {
        type: 'Maintance',
        date: '08/15/2018'
    },
    {
        type: 'Maintance',
        date: '07/15/2018'
    },
    {
        type: 'Maintance',
        date: '06/15/2018'
    }
]

const test = [
    "Email",
    "Password"
]

class System extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            activeUnit: -1,
            activeUnitTab: 0,
            activeService: 0,
            test: false
        };
        this.tabPartContainer = null;
    }

    componentDidMount() {
        this.props.setActiveSideBarTab(1);
    }

    onUnitOutSideClick = (node) => {
        if (!this.tabPartContainer.contains(node) && !this.timeline.contains(node) && !this.service.contains(node)
        ) {
            this.setState({ activeUnit: -1, activeUnitTab: 0 });
        }
    }

    showImage = () => {
        alert('image clicked');
    }

    edit = () => {
        alert('edit clicked');

    }

    onAddNote = (value) => {
        notes.push(
            {
                label: "",
                subLabel: "09/10/2018 08:00 AM",
                content: value,
                images: []
            }
        )
        this.setState({ test: !this.state.test });
    }

    render() {
        let {
            activeTab,
            activeUnit,
            activeUnitTab,
            activeService
        } = this.state;

        let mainTab =
            <Tab
                className={classnames(cls.tab_style)}
                tabLinks={tabs}
                activeTab={activeTab}
                activeUnit={activeUnit}
                onTabClick={(activeTab) => this.setState({ activeTab })}
                onUnitClick={(activeUnit) => { this.setState({ activeUnit }) }}
                onUnitOutSideClick={(node) => this.onUnitOutSideClick(node)}
                onImageClick={() => this.showImage()}
                onEditClick={() => this.edit()}
            />;

        let subTab =
            <Tab
                className={classnames(cls.tab_style)}
                domRef={(inst) => this.tabPartContainer = inst}
                renderPart
                tabLinks={units[activeUnit]}
                activeTab={activeUnitTab}
                onTabClick={(activeUnitTab) => this.setState({ activeUnitTab })}
                onEditClick={() => this.edit()}
            />;
        let timeline =
            <div
                className={classnames(cls.timeline_container)}>
                <TimeLine
                    className={classnames(clsTabContent.tab_content_header, cls.responsive_timeline)}
                    data={notes}
                />
                <AddNewBox
                    label='New Note'
                    onClick={(value) => this.onAddNote(value)}
                />
            </div>
        let record =
            <div
                ref={(inst) => this.timeline = inst}
                className={classnames(cls.timeline_container, (activeTab > 0 || activeUnitTab < 1 || activeUnit < 0) && cls.hidden)}
            >
                <TimeLine
                    className={classnames(clsTabContent.tab_content_header)}
                    data={notes}
                />
                <AddNewBox
                    label='New Comment'
                    onClick={(value) => this.onAddNote(value)}
                />
            </div>
        return (

            <Dashboard history={this.props.history}>
                <UikContainerVertical className={classnames(
                    clsTab.container,
                    'col-lg-5')
                }>
                    {mainTab}
                    {activeTab === 2 && timeline}
                </UikContainerVertical>
                <UikContainerHorizontal>
                    <div
                        className={classnames(
                            'col-sm-4',
                            cls.responsive_repair,
                            (activeUnitTab !== 1 || activeTab !== 0) && cls.responsive_hidden
                        )}
                    >
                        <Repair
                            domRef={(inst) => this.service = inst}
                            className={classnames(
                                cls.repair_layout,
                                (activeUnitTab !== 1 || activeTab !== 0) && cls.hidden)}
                            data={services}
                            onClick={(indx) => this.setState({ activeService: indx })}
                            activeIndex={activeService}
                        />
                    </div>
                    <UikContainerVertical className={classnames(clsTab.container, cls.responsive_subTab_container)}>

                        {activeUnit !== -1 && activeTab === 0 && subTab}
                        {record}
                    </UikContainerVertical >
                </UikContainerHorizontal>
            </Dashboard >
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveSideBarTab: (tab) => {
            dispatch(setActiveSideBarTab(tab))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(System);