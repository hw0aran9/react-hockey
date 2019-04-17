import React, { Component } from 'react';
import './App.css';
import Menubar from './Menubar';
import Scoreboard from './Scoreboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar />
        <Scoreboard />
      </div>
    );
  }
}

export default App;
