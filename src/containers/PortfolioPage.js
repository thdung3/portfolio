import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function PortfolioPage() {
    return (
        <Container id="portfolio">
            <h1>Portfolio</h1>
            <Row>
                <Col md={6}>
                    <Card style={{ backgroundColor: '#191919' }}>
                        <Card.Img variant="top" src="../Movie.png" />
                        <Card.Body>
                            <Card.Title className="portfolio-card-title">IMDB Movie</Card.Title>
                            <Card.Text>
                                A clone IMDB using the public Movie DB API using Bootstrap 4 and Reactjs.
                            </Card.Text>
                            <Button onClick={() => window.open('https://dd-tmdb.netlify.app/', '_blank')} variant="warning">Demo</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ backgroundColor: '#191919' }}>
                        <Card.Img variant="top" src="../Number_Game.png" />
                        <Card.Body>
                            <Card.Title className="portfolio-card-title">Number guess game</Card.Title>
                            <Card.Text>
                                Guess the number using HTML/CSS
                            </Card.Text>
                            <Button onClick={() => window.open('https://dd-number-guess-game.netlify.app/', '_blank')} variant="warning">Demo</Button>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
    )
}
