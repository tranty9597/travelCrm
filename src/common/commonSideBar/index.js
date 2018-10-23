import React, { PureComponent } from 'react';
import MediaQuery from 'react-responsive';
import { FaAngleDown } from 'react-icons/fa';

import "./styles.css";

class CommonSideBar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    onCLickIcon = () => {

    }

    render() {
        return (
            <div className={"common_side_bar-div-container "}>
                <div className="navbar navbar-expand-lg navbar-light bg-light flex-column">
                    <div className="d-flex">
                        <a className="navbar-">Menu</a>
                        <MediaQuery query="(max-device-width: 1224px)">
                            <div
                                className="navbar-toggler d-flex justify-content-center align-items-center common_side_bar-div-toogler-button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-label="Toggle navigation"
                            >
                                <FaAngleDown onClick={this.onCLickIcon} />
                            </div>
                        </MediaQuery>

                    </div>
                    <div className="collapse navbar-collapse flex-column" id="navbarNav">
                        <ul className="navbar-nav flex-column">

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommonSideBar;

class NavbarRow extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <li className="nav-item active">
                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
            </li>
        );
    }
}

export { NavbarRow };