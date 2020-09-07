// import React, { Component } from 'react';
import React from 'react';
import './App.css';
// import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Work from './components/Work';

function App() {
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


export default App;
