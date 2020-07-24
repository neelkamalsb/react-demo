import React, { Component } from 'react';
import Main from './components/MainComponent.js';
import './App.css';
import { BrowserRouter }  from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
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
