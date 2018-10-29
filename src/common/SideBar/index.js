import React, { PureComponent } from 'react';

import {
    UikNavPanel,
    UikNavLink,
    UikNavSectionTitle,
    UikNavSection,
    UikButton,
} from "../../UikLayout";

import classnames from 'classnames';

import cls from "./styles.module.scss";
import Footer from '../Footer';

type SideBarProps = {
    listMenu?: array,
    title?: string
}

class SideBar extends PureComponent<SideBarProps> {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            clicked: false
        };
    }

    componentDidMount() {
    }

    onClick = (indx) => {
        this.setState({ activeIndex: indx })
    }

    render() {
        let {
            title,
            listMenu
        } = this.props;
        let { activeIndex, clicked } = this.state;

        return (
            <UikNavPanel className={classnames(
                "d-flex",
                "flex-column",
                "justify-content-between",
                cls.nav_panel,
                clicked && cls.show
            )}>
                <div>
                    <UikNavSectionTitle className={classnames(cls.nav_section_title)}>
                        {title}
                    </UikNavSectionTitle>
                    <UikButton
                        className={classnames(cls.responsive_button)}
                        contentClassName={classnames(cls.item_button)}
                        onClick={() => this.setState({ clicked: !clicked })
                        }>
                        <div className={classnames(
                            "d-flex",
                            "justify-content-center",
                            "align-items-center"
                        )}>
                            {clicked && title}
                            <span>
                                <div className={classnames(cls.nav_section, clicked && cls.show)}>
                                    <svg fill="currentColor" height="2px" version="1.1" viewBox="0 0 14 2" width="14px" className={classnames(cls.line1)}>
                                        <g id="Icon/20px/menu-[Extra]" transform="translate(0.000000, -2.000000)">
                                            <polygon id="Path" points="0 4 14 4 14 2 0 2">
                                            </polygon>
                                        </g>
                                    </svg>
                                    <svg fill="currentColor" height="2px" version="1.1" viewBox="0 0 20 2" width="20px" className={classnames(cls.line2)}>
                                        <g id="Icon/20px/menu-[Extra]" transform="translate(0.000000, -9.000000)">
                                            <polygon id="Path" points="0 11 20 11 20 9 0 9">
                                            </polygon>
                                        </g>
                                    </svg>
                                    <svg fill="currentColor" height="2px" version="1.1" viewBox="0 0 14 2" width="14px" className={classnames(cls.line3)}>
                                        <g id="Icon/20px/menu-[Extra]" transform="translate(0.000000, -2.000000)">
                                            <polygon id="Path" points="0 4 14 4 14 2 0 2">
                                            </polygon>
                                        </g>
                                    </svg>
                                </div>
                            </span>
                        </div>
                    </UikButton>
                    <UikNavSection className={classnames(
                        cls.responsive_menu,
                        clicked && cls.show
                    )}>
                        {
                            listMenu.map((menu, indx) => (
                                <React.Fragment key={menu.text}>
                                    <UikNavLink
                                        key={menu.text}
                                        className={classnames(
                                            cls.nav_link_responsive,
                                            activeIndex === indx && 'active')}
                                        highlighted
                                        onClick={() => this.onClick(indx)}
                                    >
                                        {menu.text}
                                    </UikNavLink>
                                </React.Fragment>
                            ))
                        }
                    </UikNavSection>
                </div >
                <Footer menu />

            </UikNavPanel>
        );
    }
}

SideBar.defaultProps = {
    listMenu: [],
    title: ""
}

export default SideBar;