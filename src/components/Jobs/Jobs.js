import React, { Component } from 'react';

class Jobs extends Component {
  render() {
    return (
      <section>
        <h1>Eddigi munkáim</h1>
      
        <p>
          Minden eddigi munkámat megtalálod <a href="https://github.com/Sqveeze/">GitHub</a>-on.
        </p>
    
        <ul className="big-list">
          <li><a href="https://github.com/Sqveeze/sqveeze-dot-hu" target="_blank" rel="noopener noreferrer">@</a> <a href="https://sqveeze.hu" target="_blank" rel="noopener noreferrer"> Saját weboldalam</a> <span className="comment"> React </span></li>
          <li><a href="https://github.com/Sqveeze/szupermaszat-ig-bot" target="_blank" rel="noopener noreferrer">@</a> <a href="https://ancient-shelf-31612.herokuapp.com" target="_blank" rel="noopener noreferrer">Szupermaszat instagram bot</a> <span className="comment"> NodeJS, MongoDB </span></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">(Hamarosan)</a> <a href="#" target="_blank" rel="noopener noreferrer">Project Dogpaw</a> <span className="comment"> NodeJS(Express), React, React Native, MongoDB </span></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">(Hamarosan)</a> <a href="#" target="_blank" rel="noopener noreferrer">Project Gym</a> <span className="comment"> NodeJS(Express), React, React Native, MongoDB </span></li>
        </ul>
      </section>
    );
  }
}

export default Jobs;
