import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Example from './components/Example.js';
import {Header} from './Header';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Profile} from './pages/Profile';
import {Contact} from './pages/Contact';


// Assuming the directory is "components"

function App() {
  const [state] = useState('');

  return (
    <div className="App">
      <Router>
        <Header  bg="dark" data-bs-theme="dark"/>
        <Routes>
          <Route path="/"  element ={<Home />}/>
          <Route path="/profile" element ={<Profile />}/>
          <Route path="/menu" element ={<Menu />}/>
          <Route path="/contact"  element ={<Contact />}/>
          <Route path="*"  element ={<h1>page no found</h1>}/>
        </Routes>
      </Router>
      <TopComponent state={state} />
      <Example />
    </div>
  );
}

const TopComponent = ({ state }) => (
  <div>
    <MiddleComponent state={state} />
  </div>
);

const MiddleComponent = ({ state }) => (
  <div>
    <BottomComponent state={state} />
  </div>
);

const BottomComponent = ({ state }) => (
  <div>{state}</div>
);

export default App;
