import React from 'react'
import classnames from 'classnames'

import {
    UikTopBar,
    UikTopBarSection,
    UikTopBarTitle,
} from "../../UikLayout"

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
            || pathname === PATH.SIGN_UP.toLowerCase()
    }

    render() {
        return (
            this.isHidden(window.location.pathname) ||
            <UikTopBar className={classnames(cls.navbar)}>
                <UikTopBarSection>
                    <UikTopBarTitle>
                        <img alt='logo' src='https://icon.cat/img/icon_loop.png' className={classnames(cls.image)} />
                    </UikTopBarTitle>
                    <UikTopBarTitle>
                        SOS Heating and Cooling, LLC
                    </UikTopBarTitle>

                </UikTopBarSection>
                <UikTopBarSection>
                    <Link to='/login' >Thang Nguyen</Link>
                </UikTopBarSection>
            </UikTopBar>

        )
    }
}

export default withRouter(NavBar) 