import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      listList2: ['yams', 'honey', 'ham', 'brie'],
      listFilter: ['yams', 'honey', 'ham', 'brie']
    }
  }

  filterList(e) {
    var filList = [];
    var newList = this.state.listList2.map((val,i,arr) => val.includes(e));
    newList.forEach((val, i, arr) => val === true ? filList.push(this.state.listList2[i]) : null);
    console.log(filList) 
    
    this.setState({listFilter: filList });
    };
  


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={e => this.filterList(e.target.value)}/>
        <ul> {this.state.listFilter.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
