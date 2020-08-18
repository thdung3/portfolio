import React from 'react'
import { Container, ProgressBar, Row, Col } from 'react-bootstrap'

export default function SkillPage() {
    return (
        <Container id="skill">
            <h1>My skills</h1>
            <Row>
                <Col md={6}>
                    <Row className="mt-4">
                        <Col md={6}><p>Cobol</p></Col>
                        <Col md={6}><p style={{ textAlign: "end" }}>95%</p></Col>
                    </Row>
                    <ProgressBar variant="warning" now={90} />
                    <Row className="mt-4">
                        <Col md={6}><p>HTML</p></Col>
                        <Col md={6}><p style={{ textAlign: "end" }}>75%</p></Col>
                    </Row>
                    <ProgressBar variant="warning" now={75} />
                </Col>
                <Col md={6}>
                    <Row className="mt-4">
                        <Col md={6}><p>NodeJS</p></Col>
                        <Col md={6}><p style={{ textAlign: "end" }}>80%</p></Col>
                    </Row>
                    <ProgressBar variant="warning" now={80} />
                    <Row className="mt-4">
                        <Col md={6}><p>CSS</p></Col>
                        <Col md={6}><p style={{ textAlign: "end" }}>75%</p></Col>
                    </Row>
                    <ProgressBar variant="warning" now={75} />
                </Col>
            </Row>

        </Container>
    )
}
