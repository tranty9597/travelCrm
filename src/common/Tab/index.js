import React, { PureComponent } from 'react';
import {
    UikTabContainer,
    UikTabItem,
    UikDivider
} from '../../UikLayout';
import classnames from 'classnames';

import cls from './styles.module.scss';

type TabProps = {
    tabLinks?: Array
}

class Tab extends PureComponent<TabProps> {
    constructor(props) {
        super(props);
        this.state = {
            activeIndx: 0
        };
    }

    onTabClick = (activeIndx) => {
        this.setState({ activeIndx })
    }

    render() {
        let { tabLinks } = this.props;
        let { activeIndx } = this.state;
        let items = [];
        let activeClass = classnames(
            cls.active,
            "active",
            "strong"
        );
        tabLinks.forEach((element, indx) => {

            items.push(
                <UikTabItem
                    key={indx}
                    text={element.text}
                    className={classnames(
                        cls.tab_div_item,
                        "col-lg-4",
                        "justify-content-center",
                        activeIndx === indx && activeClass
                    )}
                    onClick={() => this.onTabClick(indx)}
                />
            );
        })

        return (
            <div className={classnames(cls.container)}>
                <UikTabContainer className={classnames(
                    cls.tab_container,
                    "col-lg-5"
                )}>
                    {items}
                </UikTabContainer>
                <UikDivider className="col-lg-5" />
            </div>

        );
    }
}

Tab.defaultProps = {
    tabLinks: []
}

export default Tab;