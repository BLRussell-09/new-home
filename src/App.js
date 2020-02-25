import React from 'react';
import Navbar from './components/navbar/navbar';
import Skills from './components/skills/skills';
import Who from './components/who/who';
import Where from './components/where/where';
import initFirebase from './firebase/connect';
import './App.css';

initFirebase();

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Who/>
      <Where/>
      <div>
        <Skills />
      </div>
    </div>
  );
}

export default App;
