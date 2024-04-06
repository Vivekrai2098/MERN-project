import React, { useState } from 'react'
import signup from './image/signup.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
// import axios from "axios";

//ui alert
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Signup() {
  const navigate = useNavigate(); // Initialize useNavigate hook  

  //register ....
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",

  })
  //changing event

  const change = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  //register api node js
  const register = async (e) => {
    const { name, email, password, reEnterPassword } = user
    if (name && email && password && (password === reEnterPassword)) {
      e.preventDefault();
      console.log(user);

      const response = await fetch(`http://localhost:4001/Signup`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user),
      });


      //response
      if (response.ok) {
        // If response is successful, check if it's JSON or text
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          // If response is JSON, parse it as JSON
          const responseData = await response.json();
          console.log(responseData); // Log response data
          toast(responseData.message); // Alert response data

          navigate('/Login');


        } else {
          // If response is not JSON, treat it as text
          const responseText = await response.text();
          console.log(responseText); // Log response text
          toast(responseText); // Alert response text
        }
      }



      // console.log(response);




    }
    else {
      toast("invalid input")

    }



  }


  return (
    <div style={{ marginTop: "100px", padding: '30px 30px' }} className='box login template d-flex justify-content-center align-item-center  full-height'>
      {console.log("user", user)}
      <img src={signup} class="img-fluid mt-3" alt="Login" width="500" height="500" />

      <div className='form_container p-5 rounded bg-white' >


        <form>
          <h3 className='text-center'>Register </h3>

          <div className='mb-2'>
            <label htmlFor="text">Name</label>
            <input type="text" name="name" required value={user.name} placeholder='Enter Name' className='form-control' onChange={change} />
          </div>

          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required value={user.email} placeholder='Enter Email' className='form-control' onChange={change} />
          </div>




          <div className='mb-2'>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' required value={user.password} placeholder='Enter Password' className='form-control' onChange={change} />
          </div>

          {/* Reenter Password */}
          <div className='mb-2'>
            <label htmlFor="reEnterPassword">Re Enter Password</label>
            <input type="password" name='reEnterPassword' required value={user.reEnterPassword} placeholder='Re Enter Password' className='form-control' onChange={change} />
          </div>




          <div className='d-grid mt-2'>
            <button className='btn btn-primary' onClick={register} >Sign up ! </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup