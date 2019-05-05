import React, { Component } from 'react';

class Jobs extends Component {
  render() {
    return (
      <section>
        <h1>Eddigi munkáim</h1>
      
        <p>
          Minden eddigi munkámat megtalálod <a href="https://github.com/Sqveeze/">GitHub</a>-on.
          Hamarosan feltöltésre kerülnek az eddigi projektjeim(!)
        </p>
    
        <ul className="big-list">
          <li><a href="https://github.com/Sqveeze/sqveeze-dot-hu" target="_blank" rel="noopener noreferrer">@</a> <a href="https://sqveeze.hu" target="_blank" rel="noopener noreferrer"> Saját weboldalam</a> <span className="comment"> React </span></li>
          <li><a href="http://drszolnokiallatkorhazak.hu" target="_blank" rel="noopener noreferrer"> Dr. Szolnoki János - Állatkórházak</a> <span className="comment"> HTML, CSS(W3CSS), Javascript, PHP </span></li>
          <li><a href="http://www.kolonicspinceszet.hu" target="_blank" rel="noopener noreferrer"> Kolonics Pincészet</a> <span className="comment"> HTML, CSS(MDBootstrap), Javascript, PHP </span></li>
        </ul>
      </section>
    );
  }
}

export default Jobs;
