import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Work from './components/Work';

class App extends Component {
  
  constructor(props) {

  }

  componentDidMount() {

  }

  render() {
    return(

      <div className = "App">
        <Header />
        <About />
        <Work />
        <Resume />
        <Contact />
        <Footer />
      </div>
    );
  }
}


export default App;
