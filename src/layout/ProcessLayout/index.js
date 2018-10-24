import React from "react"

import { Row, Col } from "react-bootstrap"

function ProcessLayout({ children, sidebar }) {
    return (
        <Row>
            <Col md={3}>
                {sidebar}
            </Col>
            <Col xs={12} md={12} lg={9}>
                {children}
            </Col>
        </Row>

    )
}

export default ProcessLayout