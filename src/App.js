import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Search from './components/Search';
import Vehicles from './components/Vehicles';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
      <Title />
      <Search initialName="Luke SkyWalker"/>
      <Vehicles/>
      </div>
      </div>
    );
  }
}

export default App;
