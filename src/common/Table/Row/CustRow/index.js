import React from "react";
import { Uikon, UikHeadlineDesc } from "../../../../UikLayout"

import classnames from 'classnames'

import cls from "./styles.module.scss"

function RenderExpand({ dataSource }) {
    return (
        <React.Fragment>
            {dataSource.map((item, index) => {
                return (

                    <tr key={index} className={classnames(cls.expand)}>
                        <td style={{ border: 0 }}></td>
                        <td className={classnames(cls.divider)}>{item.name}</td>
                        <td>{item.name}</td>
                        <td>{item.name}</td>
                        <td>{item.name}</td>
                        <td className={classnames('text-right')}>{item.name}</td>
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
    }

    render() {
        let { expand } = this.state
        let { item, index, onEdit } = this.props
        return (
            <React.Fragment key={index}>
                <tr className={classnames(cls.wrapper)} onClick={this.toggleExpand}>
                    <td colSpan={2}>{item.name}</td>
                    <td>
                        <h6>{item.name}</h6>
                        <UikHeadlineDesc>This is name</UikHeadlineDesc>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.name}</td>
                    <td className='text-right'>
                        <React.Fragment>
                            <Uikon onClick={(e) => { e.stopPropagation(); onEdit(item) }}>add    </Uikon>
                            <Uikon onClick={(e) => { e.stopPropagation(); onEdit(item) }}>edit</Uikon>
                        </React.Fragment>

                    </td>

                </tr>
                {expand && <RenderExpand dataSource={item.dataExpand} />}
            </React.Fragment>
        )
    }
}

export default CustomerRow;