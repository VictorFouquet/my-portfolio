import React, { Component } from "react";
import "./work.css";
import calc from "./calc.png";
import clock from "./clock.png";
import drumkit from "./drumkit.png";
import markdown from "./markdown.png";
import pomodoro from "./pomodoro.png";
import prisme from "./prisme.png";
import quotes from "./quotes.png";
import search from "./search.png";
import moon from "./moon.png";

class Work extends React.Component {
  render() {
    return (
      <div id="work">
        <h1>Works :</h1>
        <div id="work-images-wrapper">
          <div id="website-projects">
            <img src={prisme} alt="ça marche ap"></img>
            <img src={moon} alt="ça marche ap"></img>
          </div>
          <div id="app-projects">
            <div id="app-project-row">
              <img src={clock} alt="ça marche ap"></img>
              <img src={pomodoro} alt="ça marche ap"></img>
              <img src={drumkit} alt="ça marche ap"></img>
            </div>
            <div id="app-project-row">
              <img src={search} alt="ça marche ap"></img>
              <img src={quotes} alt="ça marche ap"></img>
              <img src={calc} alt="ça marche ap"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
