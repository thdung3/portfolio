import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './EducationPage.css'

export default function EducationPage() {
    return (
        <Container id="education">
            <h1>Education</h1>
            <Row>
                <Col md={2}></Col>
                <Col md={2}>
                    <p>09/2010 - 05/2015</p>
                    <p>03/2014 - 05/2014</p>
                    <p>05/2015 - 06/2015</p>
                    <p>10/2015 - 12/2015</p>
                    <p>7/2020 - 10/2020</p>
                </Col>
                <Col md={8}>
                    <p>Graduated from Computer Science B.S, The University of Information Technology HCMC Vietnam</p>
                    <p>.Net internship at Global Cybersoft.</p>
                    <p>Fresher Cobol at CSC</p>
                    <p>Training courses about Cobol and Mainframe at Capgemini</p>
                    <p>Full stack web development at Coder School</p>
                </Col>
            </Row>
        </Container>
    )
}
