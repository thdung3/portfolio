import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'

export default function NavBar() {
    const [bg, setBg] = useState('transparent')

    window.onscroll = function () {
        var top = window.scrollY;
        if (top > 10) {
            setBg('dark')
        } else {
            setBg('transparent')
        }
    }

    return (
        <Navbar id="navbar" bg={bg} expand="lg" className="navbar-scroll" scrolling fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-end collapse navbar-collapse" variant="pills" defaultActiveKey="#home">
                    <Nav.Link className="nav-item-style" href="#home">Home</Nav.Link>
                    <Nav.Link className="nav-item-style" href="#about">About Me</Nav.Link>
                    <Nav.Link className="nav-item-style" href="#education">Education</Nav.Link>
                    <Nav.Link className="nav-item-style" href="#experience">Experience</Nav.Link>
                    <Nav.Link className="nav-item-style" href="#skill">Skill</Nav.Link>
                    <Nav.Link className="nav-item-style" href="#portfolio">Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
