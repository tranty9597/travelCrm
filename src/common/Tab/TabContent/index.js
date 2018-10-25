import React, { PureComponent } from 'react';

import {
    UikWidget,
    UikWidgetHeader,
    UikWidgetContent,
    Uikon,
    UikDivider
} from '../../../UikLayout';

import classnames from 'classnames';

import cls from './styles.module.scss';


type TabContentProps = {
    className?: String,
    data?: Array,
    active?: Boolean,
    onClick?: Function
}

class TabContent extends PureComponent<TabContentProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // visualData = (data) => {
    //     let unit = [];
    //     data.forEach((d, indx) => {
    //         let content = [];
    //         d.data.forEach((element, i) => {
    //             content.push(
    //                 <div
    //                     key={`${indx + i}`}
    //                     className={classnames(
    //                         cls.tab_content_row_container,
    //                         "d-flex"
    //                     )}
    //                 >
    //                     <div className={classnames(
    //                         cls.tab_content_label,
    //                     )}>
    //                         {element.label}
    //                     </div>
    //                     <div>
    //                         {Object.values(element)[1]}
    //                     </div>
    //                 </div >
    //             )
    //         });
    //         unit.push(this.createUnit(d.name, content, indx));
    //     });
    //     return unit;
    // }

    createUnit = () => {
        let {
            id,
            name,
            content,
            active,
            className
        } = this.props;
        return (
            <UikWidget
                className={classnames(
                    cls.tab_content_container,
                    className,
                    active && cls.active
                )}
                onClick={() => this.props.onClick(id)}
            >
                <UikWidgetHeader
                    noDivider
                    rightEl={(
                        <div className={classnames(cls.icon_container)}>
                            <Uikon className="col-lg-6">
                                image_picture
                                </Uikon>
                            <Uikon>
                                edit
                                </Uikon>
                        </div>
                    )}
                    className={classnames(
                        cls.tab_content_header,
                        "text-center",
                        "strong"
                    )}
                >
                    {name}
                </UikWidgetHeader>
                <UikDivider className={classnames(cls.divider)} />
                <UikWidgetContent className={classnames(
                    cls.tab_content,
                    "flex-column"
                )}>
                    {content}
                </UikWidgetContent>
            </UikWidget>
        )
    }

    render() {

        let content = this.createUnit();
        return (
            <div>
                {content}
            </div>
        );
    }
}

TabContent.defaultProps = {
    className: "",
    data: [],
    active: false,
    onClick: () => { }
}

export default TabContent;