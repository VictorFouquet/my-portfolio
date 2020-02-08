import React from "react";
import "./sidebar.css";
import circle from "./circle.png"

class SideBar extends React.Component {
  render() {
    return (
      <div id="side-bar">
        <div id="img-container">
          <img class="graph-logo" src={circle} alt="ça marche ap">
        </img></div>
        <a href="#main"><i class="fas fa-home"></i></a>
        <a href="#about"><i class="fas fa-user-alt"></i></a>
        <a href="#skills"><i class="fas fa-cog"></i></a>
        <a href="#work"><i class="far fa-eye"></i></a>
        <i class="far fa-envelope"></i>
      </div>
    );
  }
}

export default SideBar;
