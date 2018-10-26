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
                {name ?
                    <UikWidgetHeader
                        noDivider
                        rightEl={(
                            <div className={classnames(cls.icon_container)}>
                                <Uikon>
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
                    </UikWidgetHeader> :
                    <div className={classnames(cls.icon_container)}>
                        <Uikon className={classnames(cls.tab_no_header, cls.tab_content_header)}>
                        edit
                    </Uikon>
                    </div>
                    
                }
               {name && <UikDivider className={classnames(cls.divider)} />}
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