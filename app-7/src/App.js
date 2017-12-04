import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";
import NewTask from "./NewTask"

class App extends Component {
  constructor() {
    super()

    this.state = {
      list: ['shopping','dry-cleaning'],
      chore: ''
    }

    this.addChore = this.addChore.bind(this)
    this.holdChore = this.holdChore.bind(this)
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
        <NewTask 
          add={this.addChore}
          hold={this.holdChore}/>
        <List
        tasks={this.state.list} />
      </div>
    );
  }
}

export default App;
