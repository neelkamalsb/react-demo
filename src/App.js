import React, { Component } from 'react';
import Main from './components/MainComponent.js';
import './App.css';

class App extends Component{
  render() {
    return (
      <div>
        <Main />
      </div>
      
    );
  }
}

export default App;

/*
States of a component:

i.   Mounting 
ii.  Updating
iii. UnMounting

i. Mounting:
    1. constructor()
    2. getDerivedStateFromProps()
    3. render()
    4. componentDidMount()

ii. Updating:
    1. getDerivedStateFromProps()
    2. shouldComponentUpdate()
    3. render()
    4. getSnapshotBeforeUpdate()
    5. componentDidUpdate()




*/
