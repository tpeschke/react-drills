import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      userName: '',
      passWord: ''
    }
  }

  handleUsername (e) {
      this.setState({userName: e})
  }

  handlePassword (e) {
    this.setState({passWord: e})
}

  login () {
    alert(`Username: ${this.state.userName} Password: ${this.state.passWord}`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input placeholder="username" onChange={e => this.handleUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => this.handlePassword(e.target.value)}/>
        <button onClick={e => this.login()}>log in</button>
      </div>
    );
  }
}

export default App;
