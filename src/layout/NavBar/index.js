import React from 'react'
import classnames from 'classnames'

import { Link, withRouter } from "react-router-dom"

import cls from './styles.module.scss'

import { PATH } from "../../constant"

class NavBar extends React.PureComponent {
    /**
     * 
     */
    isHidden(pathname) {

        pathname.toLowerCase()
        console.log("sss", pathname)
        return pathname === PATH.LOG_IN.toLowerCase()
            || pathname === PATH.SIGN_UP.toLowerCase()
    }

    render() {
        return (
            <div>
                {this.isHidden(window.location.pathname) || <div className={classnames(cls.navbar)}>
                    <div className='row'>
                        <div className="col-1">
                            <img alt='logo' src='https://icon.cat/img/icon_loop.png' />
                        </div>
                        <h5 className='col-6'>SOS Heating and Cooling, LLC</h5>
                        <Link className='col-5 text-right' to='/login' >Thang Nguyen</Link>
                    </div>

                </div>}
            </div>

        )
    }
}

export default withRouter(NavBar) 