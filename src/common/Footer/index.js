import React, { PureComponent } from 'react';

import classnames from 'classnames';

import cls from "./styles.module.scss";

type FooterProps = {
    menu?: Boolean,
    className?: String
}

class Footer extends PureComponent<FooterProps> {

    render() {
        let {
            menu,
            className
        } = this.props;
        return (
            <div className={classnames(
                cls.footer,
                "text-center",
                menu && cls.menu,
                className)}
            >
                <div className={classnames(menu ? ("row", cls.responsive_flex) : "container")}>
                    <div className={classnames(menu && cls.item)}>
                        <span className={classnames()}>
                            © Part on demand
                    </span>
                    </div>
                    {
                        menu && (
                            <div className={classnames(menu && cls.item)}>
                                < span className={classnames()} >
                                    Help ?
                            </span>
                            </div>
                        )
                    }
                </div>
            </div >
        );
    }
}

Footer.defaultProps = {
    menu: false,
    className: ""
}
export default Footer;