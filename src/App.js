import React from 'react';
import './App.css';
import Jumbotron from './jumbotron/Jumbotron';
import SideBar from './sidebar/SideBar';
import Skills from './skills/Skills';
import About from './about/About';
import Work from './work/Work';

function App() {
  return (
    <div className="App" id="main">
      <SideBar />
      <Jumbotron />     
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
