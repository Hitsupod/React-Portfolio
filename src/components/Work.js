// import React, { Component } from 'react';
import React from 'react'; 
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Conference from '../images/ConferenceRoom.PNG';
import Hitsupod from '../images/Hitsupodport.PNG';
import Node from '../images/Nodejs.PNG';
import Project from '../images/project.PNG';
import Schedule from '../images/schedule.PNG';
import Weather from '../images/weather.PNG';

const cardStyle = {
    backgroundColor: "grey",
    padding: "10px"
}

function Work() {
    return (
        <div>
            <CardDeck style = { cardStyle }>
                <Card>
                    <Card.Img variant="top" src={ Conference } />
                    <Card.Body>
                    <Card.Title>Crickets</Card.Title>
                    <Card.Text>
                    In this project we created an internal company profile communcation system. The key 
                    features of this website include : Ability to sign up 
                    as a user, login data, reserve a conference room, and post crickets on the mainpage.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={ Project } />
                    <Card.Body>
                    <Card.Title>Weather Api</Card.Title>
                    <Card.Text>
                    A web application that retrieves historical information for a selected date in the 
                    past for a particular geographical location based on the user input. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={ Hitsupod } />
                    <Card.Body>
                    <Card.Title>Hitsupod</Card.Title>
                    <Card.Text>
                    A simple, minimalist take at a Portfolio.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
                </CardDeck>

                <CardDeck style = { cardStyle }>
                <Card>
                    <Card.Img variant="top" src={ Node }  />
                    <Card.Body>
                    <Card.Title>Employee Tracker</Card.Title>
                    <Card.Text>
                    A software engineering team generator command line application. 
                    The application will prompt the user for information about the team manager and then information about the team members.
                    The user can input any number of team members, and they may be a mix of engineers and interns.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={ Weather }  />
                    <Card.Body>
                    <Card.Title>Weather App</Card.Title>
                    <Card.Text>
                    Create a simple calendar application that allows the user to save events for each hour of the day. 
                    This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={ Schedule }  />
                    <Card.Body>
                    <Card.Title>Daily Planner</Card.Title>
                    <Card.Text>
                    Create a simple calendar application that allows the user to save events for each hour of the day. This app will 
                    run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"></small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}
export default Work;