import React, { Component } from "react";

import { connect } from 'react-redux';

import classnames from 'classnames';

import cls from './styles.module.scss';

import { setActiveSideBarTab } from '../../actions/dashboard';

import { Dashboard } from "../../containers";

import {
    UikHeadline,
    UikContainerVertical
} from '../../UikLayout';

import {
    TabWidget,
    Input
} from '../../common'

const tabs = [
    'Email',
    'Password'
]

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            currentPass: "",
            newPass: "",
            confirmPass: "",
            activeIndx: 0
        };
    }

    componentDidMount() {
        this.props.setActiveSideBarTab(-1);
    }

    onTabClick = (activeIndx) => {
        this.setState({ activeIndx })
    }

    render() {
        let { activeIndx } = this.state;
        let { user } = this.props.login;
        return (
            <Dashboard history={this.props.history}>
                <UikContainerVertical>
                    <UikHeadline>
                        {user}
                    </UikHeadline>
                    <TabWidget
                        tabs={tabs}
                        buttonTitle='Save'
                        activeIndx={activeIndx}
                        onTabClick={(indx) => this.onTabClick(indx)}
                    >
                        <div className={classnames("col-6", cls.input, activeIndx === 0 && cls.active)}>
                            <Input
                                label='Email Address'
                                onChange={(value) => {
                                    this.setState({
                                        email: value
                                    })
                                }}
                            />
                        </div>
                        <div className={classnames("col-6", cls.input, activeIndx === 1 && cls.active)}>
                            <Input
                                label='Current Password'
                                onChange={(value) => {
                                    this.setState({
                                        currentPass: value
                                    })
                                }}
                            />
                            <Input

                                label='New Password'
                                onChange={(value) => {
                                    this.setState({
                                        newPass: value
                                    })
                                }}
                            />
                            <Input
                                label='Confirm Password'
                                onChange={(value) => {
                                    this.setState({
                                        confirmPass: value
                                    })
                                }}
                            />
                        </div>
                    </TabWidget>
                </UikContainerVertical>
            </Dashboard>
        )
    }
}

UserProfile.defaultProps = {

}

const mapStateToProps = state => {
    return {
        login: state.login
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
)(UserProfile);
