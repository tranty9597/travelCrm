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
        return pathname === PATH.LOG_IN.toLowerCase()
            || pathname.includes(PATH.SIGN_UP.toLowerCase())
    }

    render() {
        let { user } = this.props.login;
        return (
            this.isHidden(window.location.pathname) ||
            <UikTopBar className={classnames(cls.navbar)}>
                <UikTopBarSection>
                    <UikTopBarTitle>
                        <Img
                            src='https://icon.cat/img/icon_loop.png'
                            className={classnames(cls.image)}
                        />
                    </UikTopBarTitle>
                    <UikTopBarTitle>
                        SOS Heating and Cooling, LLC
                    </UikTopBarTitle>

                </UikTopBarSection>
                <UikTopBarSection>
                    <Link to={PATH.DASH_BOARD} >{user}</Link>
                </UikTopBarSection>
            </UikTopBar>

        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
}

export default withRouter(connect(
    mapStateToProps
)(NavBar)) 