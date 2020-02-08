import React from "react";
import "./jumbotron.css";
import Logo from "../logo/Logo";
import rect1517 from "./rect1517.png"

class Jumbotron extends React.Component {
  render() {
    return (
      <div id="jumbotron">
        <Logo />
        <img class="graph-image" src={rect1517} alt="ça marche ap"></img>
        <img class="graph-image-2" src={rect1517} alt="ça marche ap"></img>
        <div id="text">Fullstack Developer // Web Designer // Artist  <br/>  Based in Marseille  </div>
      </div>
    );
  }
}

export default Jumbotron;
