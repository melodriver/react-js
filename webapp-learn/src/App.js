import React from 'react';
import ReactDOM from 'react-dom';
import logo from './ROGUEPSYCH-TRANSPARENT-LOGO.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RoguePsych is loading...
        </p>
        <button
          className="App-link"
          onClick="https://www.roguepsych.com/" //Doesn't work...
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </button>
      </header>
    </div>
  );
}

export default App;
