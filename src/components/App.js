import React, { Component } from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Jobs from './Jobs/Jobs';
import Works from './Works/Works';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section-wrapper">

            <About />
            <Contact />
            <Jobs />
            <Works />

        </div>
      </div>
    );
  }
}

export default App;
