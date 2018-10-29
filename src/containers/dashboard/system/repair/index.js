import React, { PureComponent } from 'react';

import classnames from 'classnames';

import {
    UikNavLink,
    UikContainerHorizontal,
} from '../../../../UikLayout';

import clsSideBar from '../../../../common/SideBar/styles.module.scss';

import cls from './styles.module.scss';

class Repair extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onClick = (indx) => {
        this.props.onClick(indx);
    }

    getRenderData = () => {
        let {
            data,
            activeIndex,
            className
        } = this.props;

        let renderData = [];
        renderData.push(
            <UikNavLink
                key={-1}
                className={classnames(cls.nav_item)}
            >
                <UikContainerHorizontal className={classnames(cls.header)}>
                    <div className={classnames('col-sm-6', cls.header_type)}>
                        TYPE
                    </div>
                    <div className={classnames('col-sm-6', cls.header_date)}>
                        DATE/TIME
                    </div>
                </UikContainerHorizontal>
            </UikNavLink>
        )
        data.forEach((element, indx) => {
            renderData.push(
                <UikNavLink
                    key={indx}
                    className={classnames(
                        clsSideBar.nav_link_responsive,
                        activeIndex === indx && 'active',
                        cls.repair_item,
                        cls.nav_item
                    )}
                    highlighted
                    onClick={() => this.onClick(indx)}
                >
                    <UikContainerHorizontal>
                        <div className={classnames('col', cls.header_type)}>
                            {element.type}
                        </div>
                        <div className={classnames('col', cls.header_date)}>
                            {element.date}
                        </div>
                    </UikContainerHorizontal>
                </UikNavLink>
            )
        });
        renderData =
            <div
                ref={(inst) => this.props.domRef(inst)}
                className={classnames(
                    cls.container,
                    cls.responsive_service_content,
                    className)
                }
            >
                {renderData}
            </div>
        return renderData;
    }

    render() {

        let content = this.getRenderData()
        return (
            content
        );
    }
}

export default Repair;