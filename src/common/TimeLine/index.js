import React, { Component } from 'react';

import {
    UikContainerVertical,
    UikContent,
    UikContentItem,
    UikContainerHorizontal,
    UikDivider
} from '../../UikLayout';

import classnames from 'classnames';

import cls from './styles.module.scss';

import Img from 'react-image';

type TimeLineProps = {
    data?: Array,
    className?: String
}

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderImage(images) {
        let temp = [];
        images.forEach((img, indx) => {
            temp.push(
                <Img
                    key={indx}
                    className={classnames(cls.image_container)}
                    src={img}
                />
            )
        })
        return temp;
    }

    analyzeData = (data) => {
        let content = [];
        data.forEach((element, indx) => {
            content.push(
                <UikContent
                    key={indx}
                    className={classnames(cls.responsive_content)}
                >
                    <UikContentItem className={classnames(cls.title)}>
                        {element.subLabel}
                    </UikContentItem>
                    <UikContentItem className={classnames(cls.content)}>
                        {element.content}
                    </UikContentItem>
                    <UikContainerHorizontal>
                        <UikContentItem>
                            {this.renderImage(element.images)}
                        </UikContentItem>
                    </UikContainerHorizontal>
                    <UikDivider />
                </UikContent>

            )
        });
        return (
            content
        )
    }

    render() {

        let {
            data,
            className
        } = this.props;
        let content = this.analyzeData(data);
        return (
            <div className={className}>
                {content}
            </div>
        );
    }
}

TimeLine.defaultProps = {
    data: [],
    className: ""
}

export default TimeLine;