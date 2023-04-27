import React from "react";
import Section3img from "../Assets/Section3New.png";
import "./Section3New.css";

function Section3New() {
  const handleClick=(()=>{
    console.log("h1");
  })
  return (
    <div className="Section3NewMain">
      <img src={Section3img} onClick={handleClick}></img>
      <div>...</div>
      <img src={Section3img}></img>
      <div>...</div>
      <img src={Section3img}></img>
      <div>...</div>
      <img src={Section3img}></img>
      <div>...</div>
      <img src={Section3img}></img>
      <div>...</div>
      <img src={Section3img}></img>
    </div>
  );
}

export default Section3New;
