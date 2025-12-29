import React from 'react'
import "../styles/project.css";

export default function Project({ project }) {
  return (

    <>
      <center> <h1>Projects</h1></center>
      <div className="proj" id="project">
        {project.map((pr) => (
          <div className="pro" key={pr.id}>
            <img src={pr.image} alt="" className="prim" />
            <p className="title">{pr.project}</p>
            <p>{pr.Technology}</p>
            
          </div>

        ))}
      </div>

    </>
  )
}
