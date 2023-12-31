import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './components/Example.js';
import {Header} from './Header';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Profile} from './pages/Profile';
import {Contact} from './pages/Contact';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form }from'./components/Form';
import { useToggle }from'./components/useToggle';
import { Cat }from'./components/Cat';

import CounterComponent from './components/CounterComponent';


// Assuming the directory is "components"

function App() {

const { state: isVisible, toggle }= useToggle();

 const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    },
 });
 const [state] = useState('');

  return (
    <div className = "App">
      <QueryClientProvider client = {client}>
        <Router>
          <Header  bg="dark" data-bs-theme="dark"/>
          <Routes>
            <Route path="/"  element ={<Home />}/>
            <Route path="/sign_up" element={<Form />}/>
            <Route path="/profile" element ={<Profile />}/>
            <Route path="/menu" element ={<Menu />}/>
            <Route path="/contact"  element ={<Contact />}/>
            <Route path="*"  element ={<h1>page no found</h1>}/>
          </Routes>
        </Router>
      <Cat/>
      <CounterComponent />
      <useCount />
      </QueryClientProvider>
      <TopComponent state={state} />
      <Example />
      <button onClick={toggle}>{ isVisible? "Hide" : "Show"}</button>
      { isVisible && <h1>{'W<お元気ですか?'} </h1>}
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
