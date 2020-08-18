import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {
    // const navbarScroll = document.querySelector('navbar-scroll');
    // console.log('navbarScroll:', navbarScroll)
    // window.onscroll = function () {
    //     var top = window.scrollY;
    //     if (top > 10) {
    //         navbarScroll.classList.add('scrolled')
    //     } else {
    //         navbarScroll.classList.remove('scrolled')
    //     }
    // }
    return (
        <Navbar bg="light" expand="lg" className="bg-transparent navbar-scroll" scrolling fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto justify-content-end collapse navbar-collapse">
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
