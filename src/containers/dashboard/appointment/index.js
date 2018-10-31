import React from "react"

import { Select, Table } from "../../../common"

import { UikButton, UikTopBar, UikWidgetHeader, UikTopBarSection, UikTopBarTitle, UikContainerHorizontal } from "../../../UikLayout"
import { connect } from 'react-redux';
import { Row, Col } from "react-bootstrap"
import { Dashboard } from "../../../containers";
import { ApptFormModal } from "./components";
import { setActiveSideBarTab } from '../../../actions/dashboard';
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
        this.props.setActiveSideBarTab(0)
    }
    showCreateForm = () => {
        this.setState({ activeItem: {}, showModal: true, isEditForm: false })
    }
    showEditForm = (activeItem) => {

        this.setState({ activeItem, showModal: true, isEditForm: true })

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
                        <Table type={1} onEdit={this.showEditForm} />
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Appointment);