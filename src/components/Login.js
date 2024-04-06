// import React from 'react';
import React, { useState } from 'react'
// import './App.css';
import './Form.css';
import logo from './image/login.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const navigate = useNavigate(); // Initialize useNavigate hook
//register ....
const [user, setUser] = useState({
  email: "",
  password: "",

})
//changing event

const change = e => {
  const { name, value } = e.target
  setUser({
    ...user,
    [name]: value
  })


}

// that is the login api node 
const loginUser = async (e) => {
  const {email, password} = user
  if (email && password) {
    e.preventDefault();
    console.log(user);
    
    const response= await fetch(`http://localhost:4001/Login`,{
      method:"POST",
      headers:{
        'Content-Type':"application/json",
      },
      body:JSON.stringify(user),
    });

    ///password checking
    if (response.ok) {
      // If response is successful, check if it's JSON or text
      
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        // If response is JSON, parse it as JSON
        const responseData = await response.json();
        console.log(responseData); // Log response data
        toast(responseData); // Alert response data
      } else {
        // If response is not JSON, treat it as text
        const responseText = await response.text();
        console.log(responseText); // Log response text
        toast(responseText); // Alert response text
        if(responseText==='you are not register'){
          navigate('/Signup');
        }
        else if(responseText==='password not match'){
          navigate('/Login');
        }
        else{
          navigate('/Client');
        }
      }
    } 


  }
  else {
    toast("invalid input")

  }



}





  return (
    <div style={{marginTop:"100px",padding:'30px 30px'}} className='box login template d-flex justify-content-center align-item-center  full-height'>
      {console.log("user", user)}
      <div  className='form_container p-5 rounded bg-white' >
      

      <form>
        <h3 className='text-center'>Login</h3>
        <div className='mb-2'>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' required value={user.email} placeholder='Enter Email' className='form-control' onChange={change}/>
        </div>
        <div className='mb-2'>
          <label htmlFor="password">Password</label>
          <input type="password" required placeholder='Enter Password' name='password' value={user.password} className='form-control' onChange={change}/>
        </div>
        <div className='d-grid mt-2'>
          <button className='btn btn-primary' onClick={loginUser}>Login ! </button>
        </div>
      </form>
      </div>
      <img src={logo} class="img-fluid mt-3"  alt="Login" width="500" height="500" />
    </div>
  )
}

export default Login