import React from "react"

import { Select, Table } from "../../../common"

import {
    UikButton,
    UikTopBarTitle,
    UikContainerHorizontal
} from "../../../UikLayout"
import { connect } from 'react-redux';
import { Dashboard } from "../../../containers";
import { ApptFormModal } from "./components";
import {
    setActiveSideBarTab,
    getAppointments
} from '../../../actions/dashboard';
import classnames from 'classnames';
import cls from './styles.module.scss';

const FILTERS = [
    {
        value: "All",
        label: "All"
    },
    {
        value: "Unassigned",
        label: "Unassigned"
    },
    {
        value: "Tony Stark",
        label: "Tony Stark"
    },
    {
        value: "Bruce Banner",
        label: "Bruce Banner"
    }
]

const FILTERS_DATE = [
    {
        value: "Today",
        label: "Today"
    },
    {
        value: "10/30/2018",
        label: "10/30/2018"
    },
    {
        value: "10/15/2018",
        label: "10/15/2018"
    },
    {
        value: "10/14/2018",
        label: "10/14/2018"
    }
]

const appointmentSource = [
    { id: "10002", date: "Sun, Dec 31, 2017", time: "12:00 PM - 14:00 PM", pName: "Wanda Maximoff", sName: "Phil Coulson", address: "Mammel Hall", cName: "Scott Technology Center", pEmail: "wanda@avengers.com", pPhone: "353-456-3424", sPhone: "435-324-3124", sEmail: "phil@avengers.com", tName: "Tony Stark" },
    { id: "10003", date: "Sun, Dec 31, 2017", time: "12:00 PM - 14:00 PM", pName: "Natasha Romanoff", sName: "Natasha Romanoff", address: "Home", cName: "Natasha Romanoff", pEmail: "bucky@avengers.com", pPhone: "586-353-5666", sPhone: "535-535-5335", sEmail: "natasha@gmail.com", tName: "Unassigned" },
]

class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            isEditForm: false,
            activeItem: {}
        }
    }

    componentDidMount() {
        this.props.setActiveSideBarTab(0);
        this.props.getAppointments(1, 5);
    }

    showCreateForm = () => {
        this.setState({ activeItem: {}, showModal: true, isEditForm: false })
    }

    showEditForm = (activeItem) => {
        this.setState({ activeItem, showModal: true, isEditForm: true })
    }

    onAddFacility = (item) => {

    }

    renderToolbar = () => {
        return (
            <UikContainerHorizontal
                className={classnames(cls.header)}
            >
                <UikContainerHorizontal>
                    <UikTopBarTitle>
                        Appointments
                </UikTopBarTitle>
                    <UikContainerHorizontal className={classnames(cls.header_filter)}>
                        <div className={classnames('col-lg-5')}>
                            <Select
                                options={FILTERS}
                                defaultValue={"All"}
                            />
                        </div>
                        <div className={classnames('col-lg-4')}>
                            <Select
                                options={FILTERS_DATE}
                                defaultValue={"Today"}
                            />
                        </div>
                    </UikContainerHorizontal>
                </UikContainerHorizontal>
                <UikTopBarTitle>
                    <UikButton onClick={this.showCreateForm} success>
                        New Appointment
                    </UikButton>
                </UikTopBarTitle>

            </UikContainerHorizontal>
        )
    }

    render() {
        let { isEditForm, showModal } = this.state
        return (
            <div>
                <ApptFormModal
                    isVisible={showModal}
                    isEditForm={isEditForm}
                    onClose={this.toggleModal}
                />

                <Dashboard history={this.props.history}>
                    <div style={{ flexDirection: 'column', width: 'fit-content' }}>
                        {this.renderToolbar()}
                        <Table
                            onEdit={(item) => this.showEditForm(item)}
                            dataSource={appointmentSource}
                        />
                    </div>
                </Dashboard>
            </div>
        )
    }

    toggleModal = () => {
        let { showModal } = this.state;
        this.setState({ showModal: !showModal })
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
        },
        getAppointments: (pageIndex, pageCount) => {
            dispatch(getAppointments(pageIndex, pageCount))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Appointment);