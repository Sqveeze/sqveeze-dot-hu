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

        <h1 className="first">Üdv itt! A nevem Márk...</h1>
  
        <p> {birth} éves vagyok Debrecenben élek és webfejlesztéssel foglalkozom! Mostanra több mint két év munkahelyen megszerzett illetve 7 év autodiktata módon szerzett tapasztalattal rendelkezem. A magyar mellett még közepesen tudok angolul is (és <strong>#kilencáztizenhétezer</strong> egyéb nyelven is).</p>
  
        <p> Jelenleg a kedvenc programnyelvem a <strong>JavaScript</strong>. A legerősebb <strong>JavaScript</strong> technológiám a <strong>Vue</strong>, de a <strong>React</strong> és a  <strong>NodeJS</strong> is az erősségeim közé tartozik. Ha Back-endről van szó akkor <strong>Firebase</strong> illetve <strong>Express</strong>-ben írt REST API-t használok. Korábban <strong>Phalcon</strong> illetve egyéb hasonló <strong>PHP</strong> technológiákat használtam, de mostanra már mindent <strong>JavaScript</strong> alapú technológiákkal készítek. Jövőbeni céljaim, hogy előre lépjek a mobil fejlesztés terén <strong>React Native</strong> használatával illetve a <strong>Python</strong> és az <strong>Electron</strong> is érdekel.</p>

    </section>
  );
}

export default About;
