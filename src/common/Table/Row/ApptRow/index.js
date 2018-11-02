import React from "react";
import { Uikon } from "../../../../UikLayout"

import classnames from 'classnames';
import clsInvoice from '../../../../containers/dashboard/systemSetting/billing/invoice/styles.module.scss';
import cls from './styles.module.scss';

class AppoinmentRow extends React.Component {
    render() {
        let { item, index, onEdit, colWidth } = this.props
        return (
            <React.Fragment
                key={index}
                className={classnames(cls.wrapper)}
            >
                <tr
                    className={cls.show}
                    onClick={this.toggleExpand}
                >
                    <td
                        style={{ width: `${colWidth[0].size}%` }}
                        className={classnames(clsInvoice.col, cls.col_appt)}
                    >
                        <div className={classnames(clsInvoice.inline_col)}>
                            <div>
                                {item.id}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.date}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.time}
                            </div>
                        </div>
                    </td>
                    <td style={{ width: `${colWidth[1].size}%` }} className={classnames(clsInvoice.col, cls.col_appt)}>
                        <div className={classnames(clsInvoice.inline_co)}>
                            <div className={classnames(cls.title)}>
                                {item.cName}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.address}
                            </div>
                        </div>
                    </td>
                    <td style={{ width: `${colWidth[2].size}%` }} className={classnames(clsInvoice.col, cls.col_appt)}>
                        <div className={classnames(clsInvoice.inline_col)}>
                            <div>
                                {item.pName}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.pPhone}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.pEmail}
                            </div>
                        </div>
                    </td>
                    <td style={{ width: `${colWidth[3].size}%` }} className={classnames(clsInvoice.col, cls.col_appt)}>
                        <div className={classnames(clsInvoice.inline_col)}>
                            <div>
                                {item.sName}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.sPhone}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.sEmail}
                            </div>
                        </div>
                    </td>
                    <td style={{ width: `${colWidth[4].size}%` }} >{item.tName}</td>
                    <td style={{ width: `${colWidth[5].size}%` }} className='text-right'>
                        <React.Fragment>
                            <Uikon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onEdit(item)
                                }}
                                className={classnames(cls.icon)}
                            >
                                edit
                            </Uikon>
                        </React.Fragment>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}

export default AppoinmentRow;