import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {
    UikTabContainer,
    UikTabItem,
} from '../../UikLayout';
import classnames from 'classnames';

import cls from './styles.module.scss';
import TabContent from './TabContent';

type TabProps = {
    tabLinks?: Array,
    activeTab?: Number,
    activeUnit?: Number,
    onTabClick?: Function,
    onUnitClick?: Function,
    onUnitOutSideClick?: Function,
    className?: String,
    renderPart?: Boolean,
    editClick?: Function,
    imageClick?: Function
}

class Tab extends PureComponent<TabProps> {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.tabContent = [];
        this.tabUnitContainer = null;
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.onUnitOutSideClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onUnitOutSideClick, false);
    }

    onTabClick = (activeTab) => {
        this.props.onTabClick(activeTab)
    }

    onUnitOutSideClick = (e) => {
        let { activeUnit } = this.props;
        if (activeUnit !== -1 && this.tabContent[activeUnit]) {
            if (
                !this.tabContent[activeUnit].contains(e.target) &&
                !this.tabUnitContainer.contains(e.target)
            ) {
                this.props.onUnitOutSideClick(e.target);
            }
        }

    }

    onUnitClick = (e, activeUnit) => {
        let domNode = ReactDOM.findDOMNode(this.tabContent[activeUnit]);
        if (domNode.contains(e.target)) {
            this.props.onUnitClick(activeUnit)
        }
    }

    visualData = (data, activeUnit, renderPart) => {

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
                this.tabContent.push();
                unit.push(
                    <div
                        ref={(inst) => this.tabContent[indx] = inst}
                        key={indx}
                    >
                        <TabContent
                            name={d.name}
                            content={content}
                            id={indx}
                            active={activeUnit === indx}
                            onClick={(e, id) => { this.onUnitClick(e, id) }}
                            onImageClick={() => this.props.onImageClick()}
                            onEditClick={() => this.props.onEditClick()}
                        />
                    </div>
                );
            });
        }
        return (
            <div className={classnames(
                renderPart ? 'col' : 'col-lg-10',
                cls.tab_content
            )}>
                {unit}
            </div>
        )
    }

    render() {
        let { tabLinks, activeTab, activeUnit, className, renderPart } = this.props;
        let units = [];
        units = this.visualData(tabLinks[activeTab].unit, activeUnit, renderPart);
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
                        "col",
                        "justify-content-center",
                        "text-center",
                        activeTab === indx && activeClass
                    )}
                    onClick={() => this.onTabClick(indx)}
                />
            );
        })
        return (
            <div
                ref={(inst) => renderPart ? this.props.domRef(inst) : (this.tabUnitContainer = inst)}
                className={classnames(
                    cls.container,
                    renderPart && cls.responsive_unit_tab_content,
                    className)}>
                <UikTabContainer className={classnames(cls.tab_container, renderPart && 'col-lg-10')}>
                    {items}
                </UikTabContainer>

                {
                    tabLinks[activeTab].unit &&
                    <UikTabContainer className={classnames(
                        cls.tab_container,
                        cls.tab_content,
                    )}>
                        {units}
                    </UikTabContainer>

                }
            </div >

        );
    }
}

Tab.defaultProps = {
    tabLinks: [],
    activeTab: 0,
    activeUnit: -1,
    onTabClick: () => { },
    onUnitClick: () => { },
    onUnitOutSideClick: () => { },
    imageClick: () => { },
    editClick: () => { },
    className: "",
    renderPart: false,
}

export default Tab;