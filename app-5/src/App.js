import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./Image"

class App extends Component {
  constructor() {
    super()

    this.state = {
      src: "https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg"
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Image
          link={this.state.src}/>
      </div>
    );
  }
}

export default App;
