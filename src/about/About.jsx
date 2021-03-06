import React from "react";
import "./about.css";
import rect1517 from "../jumbotron/rect1517.png"

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="about-wrapper">
          <h1>Who am I ?</h1>

          <h3>Attitude</h3>

          <p>Were I asked about my main philosophy, I would suggest that we, as human beings, should be compared to tree diagrams more than to piles. 
          Regarded as an intricate network of knowledges, tastes and abilities, richer than a mere addition of traits.</p>
          <p>As well as visual harmony in creation always draws in the exact same roots, either it gets pursued in a fine craft workshop or in front of a keyboad,
          a bold and sharp state of mind will spring whatever the soil, refining the selfsame practical sense and ingenuity.</p>

          <h3>Background</h3>

          <p>Continuously engaged into an esthetic research built on practical experimentation,
          I've committed myself to deploy new branches in as many fields of creation as I've been given the opportunity to explore.</p>
          <p>From art studies to a gilding and mural design first part of career, with frequent moves to both 2d and 3d digital graphics,
          my path has been aimed at linking my techniques to express the duality of an artistic sensibility coupled to a scientific conduct for understanding
          how do strings get pulled behind the scene.</p>
          
          <h3>Current considerations</h3>

          <p>Initiated to computer science and web design in 2019 through The Hacking Project peer-learning bootcamp, I've discovered what is,
          so far to me, the most complete tool for creative expression and intelligence organisation.</p>

          <b><p>Why ?</p></b>
          
          <p>Because informatics are limitless in their fields of application.</p>
          <p>Because of the invaluable interactive potential these technologies offer due their widespread use.</p>
          <p>Because with some well-shaped lines of code, a whole universe can be created from scratch, from its mecanics to its flourishes.</p>

          <h3>What I can do for you </h3>

          <ul>
              <li>Sober and elegant designs</li>
              <li>Efficient and simple solutions to complex problems</li>
              <li>Innotive ideas and smart propositions</li>
          </ul>
          <img class="graph-image-reversed" src={rect1517} alt="ça marche ap"></img>
          <img class="graph-image-2-reversed" src={rect1517} alt="ça marche ap"></img>
        </div>
        
      </div>
    );
  }
}

export default About;
