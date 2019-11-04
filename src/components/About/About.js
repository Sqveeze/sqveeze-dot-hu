import React, { useState } from 'react';

function About() {
  const [birth, setBirth] = useState(calculateAge);

  function calculateAge() {
    let today = new Date();
    let birthDate = new Date('1993-06-25');
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  return (
    <section>

        <h1 className="first">Szia Márk vagyok, Full-Stack Javascript Developer</h1>
  
        <p> {birth} éves vagyok és Debrecenben élek. A magyar mellett még közepesen tudok angolul is (és <strong>#kilencszáztizenhétezer</strong> egyéb nyelven is).</p>
  
        <p> Jelenleg <strong>NodeJS</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>Vue</strong> technológiákat használok. Korábban <strong>PHP</strong>-t használtam. A jövőben szeretném jobban megismerni a <strong>Swift</strong>-et illetve az <strong>Elektron</strong>-t.</p>
        
    </section>
  );
}

export default About;
