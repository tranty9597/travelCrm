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
    onClick?: Function,
    onImageClick?: Function,
    onEditClick?: Function
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
        let imgIcon =
            <Uikon onClick={() => this.props.onImageClick()}>
                image_picture
            </Uikon>;
        let editIcon =
            <Uikon onClick={() => this.props.onEditClick()}>
                edit
            </Uikon>;
        return (
            <UikWidget
                className={classnames(
                    cls.tab_content_container,
                    className,
                    active && cls.active
                )}
                onClick={(e) => this.props.onClick(e, id)}
            >
                {name ?
                    <UikWidgetHeader
                        noDivider
                        rightEl={(
                            <div className={classnames(cls.icon_container)}>
                                {imgIcon}
                                {editIcon}
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
                    <div className={classnames(
                        cls.icon_container,
                        cls.tab_no_header,
                        cls.tab_content_header
                    )}>
                        {editIcon}
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
    onClick: () => { },
    onImageClick: () => { },
    onEditClick: () => { },
}

export default TabContent;