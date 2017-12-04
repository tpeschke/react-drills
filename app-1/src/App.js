import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      input: ''
    }
  }

  handleChange(e) {
    this.setState({input: e})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={e => this.handleChange(e.target.value)} />
        <p>{this.state.input}</p>
      </div>
    );
  }
}

export default App;
