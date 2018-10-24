import React from "react";
import { Uikon } from "../../../../UikLayout"

class AppoinmentRow extends React.Component {
    render() {
        let { item, index, onEdit } = this.props
        return (
            <React.Fragment key={index}>
                <tr onClick={this.toggleExpand}>
                    <td>{item.name}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td className='text-right'>
                        <React.Fragment>
                            <Uikon onClick={(e) => { e.stopPropagation(); onEdit(item) }}>"edit"</Uikon>
                        </React.Fragment>

                    </td>

                </tr>
            </React.Fragment>
        )
    }
}

export default AppoinmentRow;