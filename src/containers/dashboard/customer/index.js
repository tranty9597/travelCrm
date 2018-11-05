import React, { Component } from 'react';

import {
    Tab,
    TimeLine,
    AddNewBox,
    Table,
    CheckBox
} from '../../../common';
import CustomerForm from './customerForm';
import { Dashboard } from '../../../containers';
import { connect } from 'react-redux'
import {
    UikContainerVertical,
    UikContainerHorizontal,
    UikTopBarTitle, UikButton
} from '../../../UikLayout';

import {
    setActiveSideBarTab,
    getCustomers,
    setCurrentCustomerTypeID
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

const customerSource = [
    {
        name: "Scott Technology Center",
        address: "6825 Pine St, Omaha, NE 68106",
        pName: "Maria Hill",
        pPhone: "432-424-6787",
        pEmail: "maria@avengers.com",
        facility: [
            {
                name: "Mammal Hall",
                address: "6825 Pine St, Omaha, NE 68106",
                pName: "Phil Coulson",
                pPhone: "435-324-2134",
                pEmail: "phil@avengers.com",
                sName: "Pepper Pott",
                sPhone: "567-345-4565",
                sEmail: "pepper@avengers.com",
                systems: 5
            },
            {
                name: "Baxter Arena",
                address: "2425 S 67th St, Omaha, NE 68182",
                pName: "Clint Barton",
                pPhone: "142-432-5252",
                pEmail: "clint@avengers.com",
                systems: 6
            }
        ],


    },
    {
        name: "Natasha Romannoff",
        address: "16770 W Maple Rd, Omaha, NE 68116",
        pName: "Natasha Romannoff",
        pPhone: "560-738-3222",
        pEmail: "natasha@gmail.com",
        facility: [
            {
                name: "Home",
                address: "16770 W Maple Rd, Omaha, NE 68116",
                pName: "Natasha Romannoff",
                pPhone: "560-738-3222",
                pEmail: "natasha@gmail.com",
                systems: 1
            },
            {
                name: "Home 2",
                address: "16770 W Maple Rd, Omaha, NE 68116",
                pName: "Natasha Romannoff",
                pPhone: "560-738-3222",
                pEmail: "natasha@gmail.com",
                systems: 0
            }
        ],


    }
]



class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            activeUnit: -1,
            activeUnitTab: 0,
            activeService: 0,
            test: false,
            showModal: false,
            isEditForm: false,
            activeItem: {}
        };
        this.tabPartContainer = null;
    }

    componentDidMount() {
        let { currentCustomerTypeID } = this.props.dashboard;
        this.props.setActiveSideBarTab(1);
        this.props.getCustomers(1, null, currentCustomerTypeID);
    }

    getCustomers = (pageIndex) => {
        this.setState({showModal: false})
        let { currentCustomerTypeID } = this.props.dashboard;
        this.props.getCustomers(pageIndex, null, currentCustomerTypeID);
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

    onEdit = (item) => {
        alert(item);
    }

    onAddFacility = (item) => {
        alert(item)
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
    showCreateForm = () => {
        this.setState({ activeItem: {}, showModal: true, isEditForm: false })
    }

    showEditForm = (activeItem) => {
        this.setState({ activeItem, showModal: true, isEditForm: true })
    }
    toggleModal = () => {
        let { showModal } = this.state;
        this.setState({ showModal: !showModal })
    }

    onCheckBox = (currentCustomerTypeID) => {
        this.props.setCurrentCustomerTypeID(currentCustomerTypeID);
    }

    renderToolbar = () => {
        let { currentCustomerTypeID } = this.props.dashboard;
        return (
            <UikContainerHorizontal
                className={classnames(cls.header_filter)}
            >
                <UikContainerHorizontal>
                    <UikTopBarTitle>
                        Customers
                </UikTopBarTitle>
                    <UikContainerHorizontal className={classnames('col-sm-6')}>
                        <div className={classnames('col')}>
                            <CheckBox
                                checked={currentCustomerTypeID === 1}
                                label="Commercial"
                                onChange={() => this.onCheckBox(1)}
                            />
                        </div>
                        <div className={classnames('col')}>
                            <CheckBox
                                checked={currentCustomerTypeID === 2}
                                label="Residential"
                                onChange={() => this.onCheckBox(2)}
                            />
                        </div>
                    </UikContainerHorizontal>
                </UikContainerHorizontal>
                <UikTopBarTitle>
                    <UikButton onClick={this.showCreateForm} success>
                        New Customer
                    </UikButton>
                </UikTopBarTitle>

            </UikContainerHorizontal>
        )
    }
    render() {
        let {
            activeTab,
            activeUnit,
            activeUnitTab,
            activeService,
            showModal,
            isEditForm
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
            <div>
                <CustomerForm
                    isVisible={showModal}
                    isEditForm={isEditForm}
                    onClose={this.toggleModal}
                    onAddSuccess={() => this.getCustomers(1)}
                />
                <Dashboard history={this.props.history}>


                    <div style={{ flexDirection: 'column', width: 'fit-content' }}>
                        {this.renderToolbar()}
                        <Table
                            onPageClick={(pageIndex) => this.getCustomers(pageIndex)}
                            onEdit={(item) => this.onEdit(item)}
                            type={1}
                            dataSource={customerSource}
                            onAddFacility={(item) => this.onAddFacility(item)}
                        />
                    </div>
                    {/* <UikContainerVertical className={classnames(
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
                </UikContainerHorizontal> */}
                </Dashboard >
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        dashboard: state.dashboard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActiveSideBarTab: (tab) => {
            dispatch(setActiveSideBarTab(tab))
        },
        getCustomers: (pageIndex, pageCount, customerTypeID) => {
            dispatch(getCustomers(pageIndex, pageCount, customerTypeID))
        },
        setCurrentCustomerTypeID: (currentCustomerTypeID) => {
            dispatch(setCurrentCustomerTypeID(currentCustomerTypeID))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customer);