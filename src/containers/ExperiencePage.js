import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

export default function ExperiencePage() {
    return (
        <Container id="experience">
            <h1>Experience</h1>
            <Row>
                <Col md={6}>
                    <Card style={{ backgroundColor: '#191919' }}>
                        <Card.Body>
                            <Card.Title className="exp-card-date">2019 - 2020</Card.Title>
                            <Card.Text className="exp-card-role">Developer/Analyst/Leader</Card.Text>
                            <Card.Text className="exp-card-company">
                                VIETSOFT
                            </Card.Text>
                            <Card.Text>
                                Develop the centralized exchange. Research and build monitoring, withdrawal, sign tool (offline, online, sign server), generating address (HD wallet), buildAPI, set up node for some blockchains like Bitcoin, Ethereum, EOS, Ripple, Tron, Stellar, Cosmos, Binance ...
                            </Card.Text>
                            <Card.Text>
                                <Badge variant="warning">NodeJS</Badge>{' '}
                                <Badge variant="warning">MongoDB</Badge>{' '}
                                <Badge variant="warning">Postgres</Badge>{' '}
                                <Badge variant="warning">JavaScript</Badge>{' '}
                                <Badge variant="warning">Blockchain</Badge>{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ backgroundColor: '#191919' }}>
                        <Card.Body>
                            <Card.Title className="exp-card-date">2016 - 1019</Card.Title>
                            <Card.Text className="exp-card-role">Developer/Analyst</Card.Text>
                            <Card.Text className="exp-card-company">
                                CAPGEMINI
                            </Card.Text>
                            <Card.Text>
                                Maintain system, application about personal and enterprise insurance.
                                Build some new applications for the new business of the customer
                                Analyse customer’s requirement, write the document, estimate the
                                charge
                            </Card.Text>
                            <Card.Text>
                                <Badge variant="warning">Mainframe</Badge>{' '}
                                <Badge variant="warning">COBOL</Badge>{' '}
                                <Badge variant="warning">DB2</Badge>{' '}
                                <Badge variant="warning">DL1</Badge>{' '}
                                <Badge variant="warning">JCL</Badge>{' '}
                                <Badge variant="warning">IMS</Badge>{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
