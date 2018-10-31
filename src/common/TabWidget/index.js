import React, { PureComponent } from 'react';

import {
    UikTabItem,
    UikButton,
    UikWidget,
    UikTabContainer,
    UikWidgetContent,
    UikContainerHorizontal
} from '../../UikLayout';

import classnames from 'classnames';

import cls from './styles.module.scss';

type TabWidgetProps = {
    tabs?: Array,
    buttonTitle?: String,
    onTabClick?: Function,
    onButtonClick?: Function,
    activeIndx?: Number
}

class TabWidget extends PureComponent<TabWidgetProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getTabs = (tabs, activeIndx, buttonTitle) => {
        let content = [];
        let activeClass = classnames(
            cls.active,
            "active",
            "strong"
        );
        tabs.forEach((element, indx) => {
            content.push(
                <UikTabItem
                    key={indx}
                    text={element}
                    onClick={() => this.props.onTabClick(indx)}
                    className={classnames(
                        cls.tab_item, 'col',
                        activeIndx === indx && activeClass
                    )}
                />
            )
        });
        content = <div
            key={0}
            className={classnames('col',
                cls.tab_group)}>
            {content}
        </div>
        content = [
            content,
            <div
                key={1}
                className={classnames(
                    'd-flex',
                    'justify-content-center',
                    'align-items-center'
                )}>
                <UikButton
                    success
                    onClick={() => this.props.onButtonClick()}
                >
                    {buttonTitle}
                </UikButton>
            </div>
        ]
        content = <UikContainerHorizontal className={classnames(cls.content_container)}>
            {content}
        </UikContainerHorizontal>
        return content;
    }

    render() {
        let {
            children,
            tabs,
            activeIndx,
            buttonTitle
        } = this.props;
        let tabItems = this.getTabs(tabs, activeIndx, buttonTitle);
        return (
            <UikWidget className={classnames(cls.container)}>
                <UikTabContainer className={classnames(cls.tab_container)}>
                    {tabItems}
                </UikTabContainer>
                <UikWidgetContent className={classnames(cls.widget_content)}>
                    {children}
                </UikWidgetContent>
            </UikWidget>
        );
    }
}

TabWidget.defaultProps = {
    tabs: [],
    buttonTitle: "",
    onTabClick: () => { },
    onButtonClick: () => { },
    activeIndx: 0
}

export default TabWidget;