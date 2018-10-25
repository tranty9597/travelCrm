import React, { PureComponent } from 'react';
import {
    UikTabContainer,
    UikTabItem,
} from '../../UikLayout';
import classnames from 'classnames';

import cls from './styles.module.scss';
import TabContent from './TabContent';

type TabProps = {
    tabLinks?: Array
}

class Tab extends PureComponent<TabProps> {
    constructor(props) {
        super(props);
        this.state = {
            activeIndx: 0,
            activeUnit: -1
        };
    }

    onTabClick = (activeIndx) => {
        this.setState({ activeIndx })
    }

    onUnitClick = (activeUnit) => {
        this.setState({ activeUnit })
    }



    visualData = (data, activeUnit) => {

        let unit = [];
        if (data) {
            data.forEach((d, indx) => {
                let content = [];
                d.data.forEach((element, i) => {
                    content.push(
                        <div
                            key={`${indx + i}`}
                            className={classnames(
                                cls.tab_content_row_container,
                                "d-flex"
                            )}
                        >
                            <div className={classnames(
                                cls.tab_content_label,
                            )}>
                                {element.label}
                            </div>
                            <div>
                                {Object.values(element)[1]}
                            </div>
                        </div >
                    )
                });
                unit.push(
                    <TabContent
                        name={d.name}
                        content={content}
                        id={indx}
                        key={indx}
                        active={activeUnit === indx}
                        className={classnames("col-lg-10")}
                        onClick={(id) => this.onUnitClick(id)}
                    />
                );
            });
        }
        return unit;
    }

    render() {
        let { tabLinks } = this.props;
        let { activeIndx, activeUnit } = this.state;
        let units = [];
        units = this.visualData(tabLinks[activeIndx].unit, activeUnit);
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
                        "text-center",
                        activeIndx === indx && activeClass
                    )}
                    onClick={() => this.onTabClick(indx)}
                />
            );
        })


        return (
            <div className={classnames(cls.container, "col-lg-5")}>
                <UikTabContainer className={classnames(cls.tab_container)}>
                    {items}
                </UikTabContainer>

                {
                    tabLinks[activeIndx].unit &&
                    units
                }
            </div>

        );
    }
}

Tab.defaultProps = {
    tabLinks: []
}

export default Tab;