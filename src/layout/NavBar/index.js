import React from 'react'
import classnames from 'classnames'
import { Row, Col } from "react-bootstrap"

import {  } from "../../UikLayout"

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
            <div>
                {this.isHidden(window.location.pathname) || <div className={classnames(cls.navbar)}>
                    <Row>
                        <Col xs={2} md={1} lg={1}>
                            <img alt='logo' src='https://icon.cat/img/icon_loop.png' />
                        </Col>
                        <Col xs={11} md={11} lg={6}>
                            <h5 >SOS Heating and Cooling, LLC</h5>
                        </Col>
                        <Col xs={11} md={11} lg={5} className='text-right'>
                            <Link to='/login' >Thang Nguyen</Link>
                        </Col>

                    </Row>

                </div>}
            </div>

        )
    }
}

export default withRouter(NavBar) 