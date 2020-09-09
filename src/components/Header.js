// import React, { Component } from 'react';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Resume from '../images/ResumeV2020.pdf'



function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Hitsupod</Navbar.Brand>
                <Nav className="navbar">
                {/* <Nav.Link href="#about">About</Nav.Link> */}
                <Nav.Link href={ Resume }>Resume</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;