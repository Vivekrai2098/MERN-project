import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../components/logo.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <>
     <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-primary ">
  <strong><NavLink class="navbar-brand" to="/"> <img src={logo} style={{height:'102px',width:'102'}} alt='logo' sizes='2px'/> </NavLink></strong>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item active">
        <NavLink class="nav-link" to="/About">About <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item active">
        <NavLink class="nav-link" to="/Contact">Contact <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item active">
        <NavLink class="nav-link" to="/Signup">Signup <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item active">
        <NavLink class="nav-link" to="/Login">Login <span class="sr-only">(current)</span></NavLink>
      </li>


      
    
    </ul>
    
  </div>
</nav>
    </>
  )
}

export default Navbar