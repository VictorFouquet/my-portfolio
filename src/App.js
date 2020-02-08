import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './jumbotron/Jumbotron';
import SideBar from './sidebar/SideBar';
import Skills from './skills/Skills'
import About from './about/About'

function App() {
  return (
    <div className="App" id="main">
      <SideBar />
      <Jumbotron />     
      <About />
      <Skills />
    </div>
  );
}

export default App;
