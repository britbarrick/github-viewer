import './App.css';

import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

import React, { Component } from 'react';

class App extends Component {
  render () {
    const name = 'John Doe';
    const loading = false;
    const showName = true;

    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
