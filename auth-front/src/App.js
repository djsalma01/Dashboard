import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Register from './components/frontend/auth/Register';
import Login from './components/frontend/auth/Login';
import Home from './components/frontend/auth/Home';
import Dashboard from './components/frontend/auth/Dashboard';
import Calender from './components/frontend/auth/Calender';
import LoginGoogle from './components/frontend/auth/LoginGoogle'

import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000/"
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} >   </Route>

          <Route path='/register' element={<Register/>} >   </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path="/auth/google" element={<LoginGoogle/>} />
          <Route path='/calender' element={<Calender/>}></Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
