import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {
    UikTopBar,
    UikTopBarSection,
    UikTopBarTitle,
} from "../../UikLayout"

import Img from 'react-image'

import { Link, withRouter } from "react-router-dom"

import cls from './styles.module.scss'

import { PATH } from "../../constant"

class NavBar extends React.PureComponent {
    /**
     * 
     */
    isHidden(pathname) {

        pathname.toLowerCase()
        return pathname.includes(PATH.LOG_IN.toLowerCase())
            || pathname.includes(PATH.SIGN_UP.toLowerCase())
    }

    render() {
        let { username } = this.props.login;
        let { serviceCompanyName } = this.props.dashboard
        return (
            this.isHidden(window.location.pathname) ?
                <div className={classnames(
                    cls.logo_container,
                    "d-flex",
                    "justify-content-center",
                    "align-items-center"
                )}>
                    <Img
                        src={require('../../assets/logo/logo@3x.png')}
                        className={classnames(cls.logo)}
                    />
                </div> :
                <UikTopBar className={classnames(cls.navbar)}>
                    <UikTopBarSection>
                        <UikTopBarTitle>
                            <Img
                                src={require('../../assets/logo/logo@3x.png')}
                                className={classnames(cls.image)}
                            />
                        </UikTopBarTitle>
                        <UikTopBarTitle>
                            {serviceCompanyName.data}
                        </UikTopBarTitle>

                    </UikTopBarSection>
                    <UikTopBarSection>
                        <Link to={PATH.USER_PROFILE} >{username}</Link>
                    </UikTopBarSection>
                </UikTopBar>


        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        dashboard: state.dashboard
    }
}

export default withRouter(connect(
    mapStateToProps
)(NavBar)) 