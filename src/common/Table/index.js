import React from "react"
import { connect } from "react-redux"

import classnames from 'classnames'

import ReactPaginate from 'react-paginate';

import cls from "./styles.module.scss"
import { UikWidgetTable, UikWidget } from "../../UikLayout"

import { AppointmentRow, CustomerRow } from "./Row"
const DEFAULT_COLUMN_SIZE = 100

const ALL_TYPE_CASE = {
    APPT: 0,
    CUST: 1
}

const APPOINTMENT_HEADER = [
    { name: "", size: 18 },
    { name: "CUSTOMER", size: 24 },
    { name: "PRIMARY CONTACT", size: 18 },
    { name: "SECONDARY CONTACT", size: 20 },
    { name: "TECHNICIAN", size: 10 },
    { name: "", size: 10 }
]

const CUSTOMER_HEADER = [
    { name: "NAME", size: 36 },
    { name: "PRIMARY CONTACT", size: 18 },
    { name: "SECONDARY CONTACT", size: 20 },
    { name: "SYSTEMS", size: 10 },
    { name: "FACILITY", size: 10 },
    { name: "", size: 6 }
]

const HEADERS = [
    APPOINTMENT_HEADER,
    CUSTOMER_HEADER
]

function RenderHeader({ headers, expand, type }) {
    return (
        <thead>
            <tr>
                {headers.map((item, index) => {
                    return (
                        <th
                            key={index}
                            style={{ width: `${headers[index].size}%`, opacity: (type == 1 && !expand && index !== 0 && index !== 1 && index !== 4) ? 0 : 1 }}

                        >
                            {item.name}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

function RenderBody({ dataSource, onEdit, type, onExpand, onAddFacility }) {

    switch (type) {
        case ALL_TYPE_CASE.APPT:
            return (
                <tbody>
                    {dataSource.map((item, index) => {
                        return (
                            <React.Fragment key={index}
                            >
                                <AppointmentRow
                                    colWidth={HEADERS[type]}
                                    onEdit={() => onEdit(item)} item={item} index={index} />
                            </React.Fragment>
                        )
                    })}
                </tbody>
            )
        case ALL_TYPE_CASE.CUST:
            return (
                <tbody>
                    {dataSource.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <CustomerRow
                                    colWidth={CUSTOMER_HEADER}
                                    onEdit={(item) => onEdit(item)}
                                    item={item}
                                    index={index}
                                    onExpand={(expand) => onExpand(expand)}
                                    onAddFacility={(item) => onAddFacility(item)}
                                />
                            </React.Fragment>
                        )
                    })}
                </tbody>
            )
        default:
            return null
    }


}

type TableProps = {
    type?: ALL_TYPE_CASE.APPT | ALL_TYPE_CASE.CUST
}

class Table extends React.Component<TableProps> {
    constructor(props) {
        super(props);
        this.state = {
            expand: false
        }
    }
    render() {
        let { dataSource, type } = this.props;

        return (
            <React.Fragment>
                <UikWidget className={classnames(cls.overflowTable)}>
                    <UikWidgetTable>
                        <RenderHeader
                            headers={HEADERS[type]}
                            expand={this.state.expand}
                            type={type}
                        />
                        <RenderBody
                            type={type}
                            dataSource={dataSource}
                            onEdit={(item) => this.props.onEdit(item)}
                            onExpand={(expand) => this.setState({ expand })}
                            onAddFacility={(item) => this.props.onAddFacility(item)}
                        />
                    </UikWidgetTable>

                    <ReactPaginate
                        previousLabel=""
                        nextLabel=""
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={10}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
                        containerClassName={classnames("pagination", cls.pagination)}
                        subContainerClassName={"pages pagination"}
                        activeClassName={classnames(cls.active)} />
                </UikWidget>

            </React.Fragment>

        )
    }
    handlePageClick = (pageIndex) => {
        console.log()
    }
}
Table.defaultProps = {
    isAccordion: true,
    type: 0,
    dataSource: [],
    onAddFacility: () => {},
    onEdit: () => {}
}
const mapStateToProps = (state, own) => {
    return {
        appt: state.appt
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table)