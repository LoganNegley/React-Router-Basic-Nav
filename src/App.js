import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' componet={Home}/>
    <Route path='/about' componet={About}/>
    <Route path = '/contact' component ={Contact}/>
  </div>
);

export default App;
