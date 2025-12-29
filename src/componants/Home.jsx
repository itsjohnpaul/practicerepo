import React from 'react'
import "../styles/home.css";

export default function Home({name,domain,profimage}) {
  return (
   <>
    <div id="home" className="hero">
   <div className="bio">
      <h2>I am {name} !</h2>
      <h3>{domain}developer </h3>
      
      <button className="view"><a href="#about" style={{textDecoration:"none", color:"white"}}>View me</a>
      </button>
   </div>
   <div className="profile">
    <img src={profimage} alt="image" className="ima" />
   </div>
    </div>
    </>
  )
}
