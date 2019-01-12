import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section>
        <h1>Itt is megtalálsz</h1>
      
        <p>
          Az alábbi helyeken is megtalálsz:
        </p>
      
        <ul>
          <li>E-mail: <a href="mailto:sqveeze0@gmail.com">sqveeze0@gmail.com</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/sqveeze/">Pap Márk</a></li>
          <li>Skype: <a href="skype:live:sqveeze0?chat">live:sqveeze0</a></li>
          <li>GitLab: <a href="https://gitlab.com/Sqveeze">Sqveeze</a></li>
        </ul>
      </section>
    );
  }
}

export default Contact;
