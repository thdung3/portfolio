import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './AboutPage.css'

export default function AboutPage() {
    return (
        <Container id="about">
            <h1 className="about-title-text">About Me</h1>
            <Row>
                <Col md={5} className="about-avatar-area" >
                    <Image
                        // className="avatar-image"
                        src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/1903016_849778428423682_5818594906083742930_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=nqQvvC3xADUAX8KbE1X&_nc_ht=scontent.fsgn5-2.fna&oh=e553869aae1d06ca553e10f98019954d&oe=5F5FF3EC"
                        alt=""
                        roundedCircle
                        responsive
                        width="300"
                    />
                </Col>
                <Col md={1}></Col>
                <Col md={6}>
                    <Row>
                        <Col md={4} className="about-key-text">
                            <p>Name:</p>
                            <p>Date of birth:</p>
                            <p>Address:</p>
                            <p>Email:</p>
                            <p>Phone: </p>
                        </Col>
                        <Col md={8} className="about-value-text">
                            <p>Dung DANG</p>
                            <p>March 17, 1992</p>
                            <p>Ho Chi Minh City</p>
                            <p>thdung3@gmai.com</p>
                            <p>+84368.667.666</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
