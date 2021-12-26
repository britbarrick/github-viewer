import './App.css';

import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

import React, { Component } from 'react';

class App extends Component {
  render () {
    const name = 'John Doe';
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
