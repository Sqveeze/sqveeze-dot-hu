import React, { Component } from 'react';

class Works extends Component {
  render() {
    return (
      <section>
        <h1>Helyek ahol dolgoztam</h1>
      
        <p>
          Ezekkel a cégekkel dolgoztam együtt:
        </p>
      
        <ul className="big-list">
          <li><a href="https://codeyard.eu" target="_blank" rel="noopener noreferrer">CodeYard Kft.</a> <span className="comment">2018 április - jelenleg</span></li>
          <li><a href="https://kulcs-soft.hu" target="_blank" rel="noopener noreferrer">Kulcs-Soft Nyrt.</a> <span className="comment">2016 augusztus - 2017 április</span></li>
        </ul>
      </section>
    );
  }
}

export default Works;
