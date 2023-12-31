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
import { Form }from'./components/Form'
// Assuming the directory is "components"

function App() {
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
            <Route path="/profile" element ={<Profile />}/>
            <Route path="/menu" element ={<Menu />}/>
            <Route path="/contact"  element ={<Contact />}/>
            <Route path="*"  element ={<h1>page no found</h1>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
      <TopComponent state={state} />
      <Example />
      <Form />
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
