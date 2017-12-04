import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: ['shopping','dry-cleaning'],
      chore: ''
    }
  }

  addChore() {
    var newList = this.state.list;
      if (newList.indexOf(this.state.chore) === -1) {
           newList.push(this.state.chore)} 
    var sortList = newList.sort();
    this.setState({list: sortList})
  }

  holdChore(e) {
    var tempChore = e;
    this.setState({chore: tempChore})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>To Do List</h1>
        <input placeholder="Enter New Task" onChange={e => this.holdChore(e.target.value)}/>
        <button onClick={e => this.addChore()}>Add</button>
        <Todo
        list={this.state.list} />
      </div>
    );
  }
}

export default App;
