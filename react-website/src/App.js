import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
    <Router>
       <Navbar />
       <Switch>
         <Route path='/' exact />
        </Switch>
        </Router>
      </div>
    );
  }


export default App;
 