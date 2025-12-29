import { useState } from "react";
import "./App.css";
import Navbar from "./componants/navbar";
import Home from "./componants/Home";
import About from "./componants/About";
import Skills from "./componants/Skills";
import Project from "./componants/Project";
import profimage from "./assets/profile.png";
import java from "./assets/java.jpeg";
import html from "./assets/html.jpeg";
import react from "./assets/react.jpeg";
import js from "./assets/js.jpeg";
import quiz from "./assets/quiz.jpeg";
import veg from "./assets/vegetable.jpeg";
import cb from "./assets/cb.png";
import lp from "./assets/lp.png";
import Footer from "./componants/Footer";




function App() {
  const detail = {
    name: "Johnpaul",
    domain: "Fullstack",
    profimage,
  };

  const skillsData = [
    { id: 1, image: html, skill: "HTML" },
    { id: 2, image: java, skill: "java" },
    { id: 3, image: react, skill: "react js" },
    { id: 4, image: js, skill: "java script" },

  ];

  const projectData = [
    { id: 1, image: veg, project: "Vegetable Price Prediction", Technology: "Machine Learning",Des:"abced ef" },
    { id: 2, image: quiz, project: "Quiz Application", Technology: "MERN STACK",Des:"akdsfsa" },
    { id: 3, image: cb, project: "chat Application", Technology: "MERN STACK",Des:"dajffjie" },
    { id: 3, image: lp, project: "Licence plate number Detection ", Technology: "python-opencv" ,Des:"askdfhjshf"}


  ];

  return (
    <>
      <Navbar />
      <Home {...detail} />
      <About />
      <Skills skills={skillsData} />
      <Project project={projectData} />
      <Footer/>
    </>
  );
}

export default App;
