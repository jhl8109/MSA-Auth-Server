import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Signup from './components/signup'
import Signin from './components/signin';
import Users from './components/users';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Route path = '/signup' component = {Signup}/> 
        <Route path = '/signin' component = {Signin}/> 
        <Route path = '/users' component = {Users}/> 
       </BrowserRouter>
      
    </div>
  );
}

export default App;
