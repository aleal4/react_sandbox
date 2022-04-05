import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Register from './Register';

function App() {
  return (
    <div className="App">
      Hello! I'm App!
      <h4>Today we will Cover</h4>
      <ul>
        <ol>Front End Routing</ol>
        <ol>Hooks</ol>
        <ol>Lifecycle Methods</ol>
        <ol>Fetch</ol>
      </ul>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
