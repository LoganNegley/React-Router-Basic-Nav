import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation />
    <Route path='/' componet={Home}/>
    <Route pathe='/about' componet={About}/>
    <Route path = '/contact' component ={Contact}/>
  </div>
);

export default App;
