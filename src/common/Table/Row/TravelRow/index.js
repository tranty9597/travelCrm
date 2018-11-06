import React from "react";
import { Uikon, UikHeadlineDesc } from "../../../../UikLayout"
import { FiPlusCircle } from 'react-icons/fi';
import classnames from 'classnames'
import clsInvoice from '../../../../containers/dashboard/systemSetting/billing/invoice/styles.module.scss';
import cls from "./styles.module.scss"

const PADDING_EXPAND = 5;

function RenderExpand({ dataSource, colWidth }) {
    return (
        <React.Fragment>
            {dataSource.map((item, index) => {
                return (

                    <tr
                        className={cls.show}
                        key={index}
                    >
                        <td style={{ border: 'none', width: `${PADDING_EXPAND}%` }}>

                        </td>
                        <td
                            style={{ width: `${colWidth[0].size - PADDING_EXPAND}%` }}
                            className={classnames(clsInvoice.col, cls.col_appt, cls.expand)}
                        >
                            <div className={classnames(clsInvoice.inline_col)}>
                                <div className={classnames(cls.title)}>
                                    {item.name}
                                </div>
                                <div className={classnames(clsInvoice.sub)}>
                                    {item.address}
                                </div>
                            </div>
                        </td>
                        <td
                            style={{ width: `${colWidth[1].size}%` }}
                            className={classnames(clsInvoice.col, cls.col_appt)}
                        >
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
                        <td
                            style={{ width: `${colWidth[2].size}%` }}
                            className={classnames(clsInvoice.col, cls.col_appt)}
                        >
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
                        <td
                            style={{ width: `${colWidth[3].size}%` }}
                            className={classnames(clsInvoice.col, cls.col_appt, cls.system)}
                        >
                            {item.systems}
                        </td>
                        <td style={{ width: `${colWidth[4].size}%` }} >
                        </td>
                        <td style={{ width: `${colWidth[5].size}%` }} className='text-right'>
                            <React.Fragment>
                                <Uikon
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        this.props.onEdit(item)
                                    }}
                                    className={classnames(cls.icon)}
                                >
                                    edit
                            </Uikon>
                            </React.Fragment>
                        </td>
                    </tr>
                )
            })}
        </React.Fragment>

    )
}

class CustomerRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }
    toggleExpand = () => {
        this.setState({ expand: !this.state.expand })
        this.props.onExpand(!this.state.expand)
    }

    render() {
        let { expand } = this.state
        let { item, index, colWidth } = this.props
        return (
            <React.Fragment key={index}>
                <tr
                    className={classnames(cls.wrapper)}
                    onClick={this.toggleExpand}
                >
                    <td
                        style={{ width: `${colWidth[0].size}%` }}
                        className={classnames(clsInvoice.col, cls.col_appt)}
                    >
                        <div className={classnames(clsInvoice.inline_col)}>
                            <div className={classnames(cls.title)}>
                                {item.name}
                            </div>
                            <div className={classnames(clsInvoice.sub)}>
                                {item.address}
                            </div>
                        </div>
                    </td>
                    <td
                        style={{ width: `${colWidth[1].size}%` }}
                        className={classnames(clsInvoice.col, cls.col_appt)}
                    >
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
                    <td
                        style={{ width: `${colWidth[2].size}%` }}
                        className={classnames(clsInvoice.col, cls.col_appt)}
                    >
                    </td>
                    <td
                        style={{ width: `${colWidth[3].size}%` }}
                        className={classnames(clsInvoice.col, cls.col_appt)}>
                    </td>
                    <td style={{ width: `${colWidth[4].size}%`, padding: 0 }} >
                        <React.Fragment>
                            <div
                                className={classnames(cls.icon)}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    this.props.onAddFacility(item)
                                }}
                            >
                                <svg className={classnames(cls.stroke, cls.icon)} viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" strokeWidth="7.5"></circle>
                                    <line x1="32.5" y1="50" x2="67.5" y2="50" strokeWidth="5"></line>
                                    <line x1="50" y1="32.5" x2="50" y2="67.5" strokeWidth="5"></line>
                                </svg>
                            </div>
                        </React.Fragment>
                    </td>
                    <td style={{ width: `${colWidth[5].size}%` }} className='text-right'>
                        <React.Fragment>
                            <Uikon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    this.props.onEdit(item)
                                }}
                                className={classnames(cls.icon)}
                            >
                                edit
                            </Uikon>
                        </React.Fragment>
                    </td>
                </tr>
                {expand && <RenderExpand dataSource={item.facility} colWidth={colWidth} />}
            </React.Fragment>
        )
    }
}

export default CustomerRow;