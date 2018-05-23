import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/js/NavBar';
import ContenedorPrincipal from './components/js/ContenedorPrincipal'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ContenedorPrincipal />
      </div>
    );
  }
}

export default App;
