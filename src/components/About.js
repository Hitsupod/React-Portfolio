// import React, { Component } from 'react';
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Picture from '../images/DSC_0163.jpg';

const imgStyle = {
    width: "145px",
    height: "auto"
}

const jumbostyle = {
    backgroundColor: "grey",
    color: "white"
}

function About() {
    return (
        <div>
            <Jumbotron style = { jumbostyle } fluid>
                <div>
                    <Image style = { imgStyle } src= { Picture } roundedCircle />
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