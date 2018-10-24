import React from "react"
import { connect } from "react-redux"

import classnames from 'classnames'

import ReactPaginate from 'react-paginate';

import cls from "./styles.module.scss"
import { UikWidgetTable, UikWidget } from "../../UikLayout"

import { AppointmentRow, CustomerRow } from "./Row"
const DEFAULT_COLUMN_SIZE = 100


const APPOINTMENT_HEADER = [
    { name: "", size: DEFAULT_COLUMN_SIZE },
    { name: "CUSTOMER", size: DEFAULT_COLUMN_SIZE * 1.5 },
    { name: "PRIMARY CONTACT", size: DEFAULT_COLUMN_SIZE },
    { name: "SECONDARY CONTACT", size: DEFAULT_COLUMN_SIZE },
    { name: "TECHNICIAN", size: DEFAULT_COLUMN_SIZE },
    { name: "", size: DEFAULT_COLUMN_SIZE }
]

const CUSTOMER_HEADER = [
    { name: "", size: DEFAULT_COLUMN_SIZE * 0.2 },
    { name: "NAME", size: DEFAULT_COLUMN_SIZE * 1.5 },
    { name: "PRIMARY CONTACT", size: DEFAULT_COLUMN_SIZE },
    { name: "SECONDARY CONTACT", size: DEFAULT_COLUMN_SIZE },
    { name: "SYSTEMS", size: DEFAULT_COLUMN_SIZE },
    { name: "FACILITY", size: DEFAULT_COLUMN_SIZE }
]

const HEADERS = [
    APPOINTMENT_HEADER,
    CUSTOMER_HEADER
]

function RenderHeader({ headers }) {
    return (
        <thead>
            <tr>
                {headers.map((item, index) => {
                    return <th key={index} style={{ minWidth: item.size }}>{item.name}</th>
                })}
            </tr>
        </thead>
    )
}

class Table extends React.Component {

    render() {
        let { dataSource, onEdit, type } = this.props;

        return (
            <React.Fragment>
                <UikWidget className={classnames(cls.overflowTable)}>
                    <UikWidgetTable>
                        <RenderHeader
                            headers={HEADERS[type]}
                        />
                        <tbody>
                            {dataSource.map((item, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <CustomerRow onEdit={onEdit} item={item} index={index} />
                                    </React.Fragment>
                                )
                            })}
                        </tbody>

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
    type: 1,
    dataSource: [
        { name: "a van b", age: "10", phone: "1000000000", email: "ssss@gmail.com", test: "TEST", dataExpand: [{ name: "zz" }, { name: "zz" }, { name: "zz" }, { name: "zz" }] },
        { name: "a van b", age: "10", phone: "1000000000", email: "ssss@gmail.com", test: "TEST", dataExpand: [{ name: "zz" }] },
        { name: "a van b", age: "10", phone: "1000000000", email: "ssss@gmail.com", test: "TEST", dataExpand: [{ name: "zz" }] },
        { name: "a van b", age: "10", phone: "1000000000", email: "ssss@gmail.com", test: "TEST", dataExpand: [{ name: "zz" }] },
        { name: "a van b", age: "10", phone: "1000000000", email: "ssss@gmail.com", test: "TEST", dataExpand: [{ name: "zz" }] },
        { name: "a van b", age: "10", phone: "1000000000", email: "ssss@gmail.com", test: "TEST", dataExpand: [{ name: "zz" }] }
    ]
}
const mapStateToProps = (state, own) => {
    return {
        appt: state.appt
    }
}
const mapActionsToProps = {

}
export default connect(mapStateToProps, mapActionsToProps)(Table)