import React, { PureComponent } from 'react';

import "./styles.css";

class CommonFooter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="footer text-center">
                <div className="container">
                    <span>
                        © Part on demand
                    </span>
                </div>
            </div>
        );
    }
}

export default CommonFooter;