import React from "react";
import { Uikon, UikButton, UikContainerVertical } from "../../../../UikLayout"

import { Row } from 'react-bootstrap'
import classnames from 'classnames';
import clsInvoice from '../../../../containers/dashboard/systemSetting/billing/invoice/styles.module.scss';
import cls from './styles.module.scss';

const TRAVEL_STATUS = [
    { key: 0, value: 'About to' },
    { key: 1, value: 'On going' },
    { key: 2, value: 'Done' },
    { key: 3, value: 'Complete' },
    { key: 4, value: 'Cancle' },
]

class TravelRow extends React.PureComponent {
    render() {

        let { item, index, onComp, onRej } = this.props
        return (
            <React.Fragment
                key={index}
            >
                <tr>
                    <td>{item.travelNm}</td>
                    <td>{item.travelDes}</td>
                    <td>{item.dateCreated.substring(0, 10)}</td>
                    <td>{item.username}</td>
                    <td>{item.total + " VND"}</td>
                    <td>
                        <UikButton xs success >
                            {TRAVEL_STATUS[item.status].value}
                          </UikButton>
                    </td>

                    <td>
                        <Row>
                            <UikButton onClick={() => onComp(item.ID)} xs success>
                                Complete
                          </UikButton>
                            <UikButton  onClick={() => onRej(item.ID)} xs error>
                                Reject
                          </UikButton>
                        </Row>

                    </td>
                </tr>
            </React.Fragment>
        )
    }
}

export default TravelRow;