import React, { useState } from 'react';
import car33 from './image/car33.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

function Client() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: ""
    });

    const change = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const Book = async (e) => {
        e.preventDefault();
        const { email, password, address, address2, city, state, zip } = user;

        try {
            const response = await fetch(`http://localhost:4001/Client`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const contentType = response.headers.get('content-type');
            let responseData;

            if (contentType && contentType.includes('application/json')) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }

            // console.log(responseData); // Log response data
            toast(responseData.message); // Alert response data
            if(response==="Successfully registered our team contact soon !!!"){
                Navigate("/");
            }
        } catch (error) {
            console.error('Error:', error);
            toast("Error occurred while processing your request.");
        }
    };

    return (
        <form style={{ marginTop: "100px", padding: "50px" }}>
            {console.log(user)}
            <center><img src={car33} className="img-fluid" alt="Responsive" style={{ borderRadius: '10%', width: "700px" }} /></center>
            <center><h1>Register for your new Ride !</h1></center>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input required type="email" className="form-control" name='email' value={user.email} id="inputEmail4" placeholder="Email" onChange={change} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input required type="password" className="form-control" name='password' onChange={change} value={user.password} id="inputPassword4" placeholder="Password" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input required type="text" className="form-control" id="inputAddress" name='address' onChange={change} value={user.address} placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input required type="text" className="form-control" id="inputAddress2" name="address2" onChange={change} value={user.address2} placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input required type="text" value={user.city} name="city" onChange={change} className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" onChange={change} name='state' value={user.state} className="form-control">
                        <option selected>Delhi</option>
                        <option>Mumbai</option>
                        <option>Andhra Pradesh</option>
                        <option>Arunachal Pradesh</option>
                        <option>Assam</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input required type="text" value={user.zip} name="zip" onChange={change} className="form-control" id="inputZip" />
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input required className="form-check-input" type="checkbox" id="gridCheck" />
                    <label required className="form-check-label" htmlFor="gridCheck">
                        Read all terms and conditions
                    </label>
                </div>
            </div>
            <center><button type="submit" onClick={Book} className="btn btn-primary">BOOK !</button></center>
        </form>
    );
}

export default Client;
