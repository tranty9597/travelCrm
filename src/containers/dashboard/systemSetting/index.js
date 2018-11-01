import React, { Component } from 'react';

import { connect } from 'react-redux';

import { TabWidget } from '../../../common';

import classnames from 'classnames';

import cls from './styles.module.scss';

import CompanyProfile from './companyProfile';

import Distributor from './distributor';

import Billing from './billing';

import { Dashboard } from '../../../containers';

import { UikContainerVertical, UikHeadline } from '../../../UikLayout';

import {
    setActiveSideBarTab
} from '../../../actions/dashboard';

const tabs = [
    'Company Profile',
    'Distributors',
    'Billing'
]

class SystemSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndx: 0
        };
    }

    componentDidMount() {
        this.props.setActiveSideBarTab(3);
    }

    onTabClick = (activeIndx) => {
        this.setState({ activeIndx })
    }

    getContent = (activeIndx) => {
        switch (activeIndx) {
            case 0:
                return <CompanyProfile />
            case 1:
                return <Distributor />
            case 2:
                return <Billing />
        }
    }

    render() {
        let { activeIndx } = this.state;
        let content = this.getContent(activeIndx);
        return (
            <Dashboard history={this.props.history}>
                <UikContainerVertical>
                    <UikHeadline>
                        System Settings
                    </UikHeadline>
                    <TabWidget
                        tabs={tabs}
                        buttonTitle='Save'
                        activeIndx={activeIndx}
                        onTabClick={(indx) => this.onTabClick(indx)}
                    >
                        {content}
                    </TabWidget>
                </UikContainerVertical>
            </Dashboard>
        );
    }
}

SystemSetting.defaultProps = {

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
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SystemSetting)