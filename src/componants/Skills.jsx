import React from 'react';
import "../styles/skills.css";


export default function Skills({ skills }) {
  return (
    <>      <center> <h1>Skills</h1></center>

    <div className="skill" id="skill">
      {skills.map((sk) => (
        <div className="ski" key={sk.id}>
          <img src={sk.image} alt={sk.skill} className="skilim" />
          <p>{sk.skill}</p>
        </div>
      ))}
    </div>
    </>
  );
}
