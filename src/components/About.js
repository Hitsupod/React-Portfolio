// import React, { Component } from 'react';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Picture from '../../public/images/'


function About() {
    return (
        <div>
            <Jumbotron fluid>
                <div>
                <Col xs={6} md={4}>
                    <Image src="../../public/images/DSC_0163.jpg" roundedCircle />
                </Col>
                    <h1>I'm Reggie Littleton.</h1>
                    <p>
                    I am looking to help businesses build responsive 
                    full scale websites while optimizing user-focused 
                    for customers with various business needs. 
                    </p>
                </div>
            </Jumbotron>
        </div>
    )
}
export default About;