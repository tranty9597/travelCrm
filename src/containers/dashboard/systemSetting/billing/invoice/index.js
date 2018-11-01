import React, { PureComponent } from 'react';

import classnames from 'classnames';

import cls from './styles.module.scss';

import {
    UikContainerHorizontal,
    UikDivider,
    UikButton
} from '../../../../../UikLayout';

type InvoiceProps = {
    data?: Array
}

class Invoice extends PureComponent<InvoiceProps> {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getContent = () => {
        let { data } = this.props;
        let content = [];
        data.forEach((element, indx) => {
            content.push(
                <div key={indx}>
                    <UikContainerHorizontal
                        className={classnames(cls.container)}
                    >
                        <div className={classnames('col', cls.col)}>
                            {element.text}
                        </div>
                        <div className={classnames('col', cls.col)}>
                            <div className={classnames(cls.inline_col)}>
                                <div>
                                    {element.date}
                                </div>
                                <div className={classnames(cls.sub)}>
                                    #{element.seri}
                                </div>
                            </div>
                        </div>
                        <div className={classnames('col', cls.col)}>
                            ${element.money}
                        </div>
                        <div className={classnames('col', cls.col, cls.button)}>
                            <div className={classnames(cls.tag, element.paid && cls.paid)}>
                                {element.paid ? "PAID" : "NOT PAID"}
                            </div>
                        </div>
                    </UikContainerHorizontal>
                    <UikDivider />
                </div>
            )
        })
        return content;
    }

    render() {
        let content = this.getContent();
        return (
            content
        );
    }
}

Invoice.defaultProps = {
    data: []
}

export default Invoice;