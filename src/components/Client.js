import React, { useState } from 'react';
import car33 from './image/car33.jpg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import Pop from './Pop';

//update
import {Modal, ModalHeader,ModalBody,Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import logo from './image/visa.png';
import logo1 from './image/mastercard.png';
import { useNavigate } from 'react-router-dom';
 

//update
// function report(){
//     toast.success("Payment deduct");
//     toast.success("Team reasponse soon");

// }



function Client({ history }) {
    //update
    const [showModal,setShowModal]=useState(false)


    const [user, setUser] = useState({
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: ""
    });
    const navigate = useNavigate(); // Initialize useNavigate hook 

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

            
            // updated
            toast.success("Payment deduct");
            toast.success("Team reasponse soon");
            navigate('/');
            
        
          



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
            {/* updated field */}

            <div className="form-group">
                <label htmlFor="inputAddress2">Enter your Aadhar Card</label>
                <input required type="text" className="form-control" id="inputAddress2" name="Aadhar" onChange={change} value={user.Aadhar} placeholder="Enter your Aadhar Card" />
            </div>

            <div className="form-group">
                <label htmlFor="inputAddress2">Enter your Driving Licence </label>
                <input required type="text" className="form-control" id="inputAddress2" name="Drving" onChange={change} value={user.Drving} placeholder="Enter your Driving Licence" />
            </div>


            <div className="form-group">
                <label htmlFor="inputAddress2">Enter your Source </label>
                <input required type="text" className="form-control" id="inputAddress2" name="Drving" onChange={change} value={user.Drving} placeholder="Enter your Source" />
            </div>

            <div className="form-group">
                <label htmlFor="inputAddress2">Enter your Destination  </label>
                <input required type="text" className="form-control" id="inputAddress2" name="Drving" onChange={change} value={user.Drving} placeholder="Enter your Destination"/>
            </div>


            {/* updated */}

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Departure Date</label>
                    <input required type="date" value={user.city} name="Departure Date" onChange={change} className="form-control" id="inputCity" />
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Return Plane</label>
                    <input required type="date" value={user.city} name="return plane" onChange={change} className="form-control" id="inputCity" />
                </div>


                
               
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
            <center><button type="submit"  onClick={() => setShowModal(true)} className="btn btn-primary">BOOK !</button></center>
            {/* updated */}
                
            <Modal size='lg' show={showModal} onHide={() => setShowModal(false)}>

                    <ModalHeader  closeButton>
                       <div>
                      Payment Gatway 
                       </div>


                    </ModalHeader>

                   
                    <ModalBody>
                        <form>
                            <Row>
                                <Col>
                                <img src={logo} style={{width:"340px",paddingLeft:"100px"}} class="img-fluid mt-3"  alt="Login" width="500" height="500" />
                                </Col>
                                <Col>
                                <img src={logo1} style={{width:"340px",paddingLeft:"100px"}} class="img-fluid mt-3"  alt="Login" width="500" height="500" />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <div style={{marginTop:"20px"}}>
                                        <label htmlFor='name'>
                                            Name On Card
                                        </label>
                                        <input type='text' className='form-control' placeholder='Name On Card'/>

                                    </div>
                                    

                                </Col>
                                
                                <Col lg={6}>
                                    <div style={{marginTop:"6px"}}>
                                        <label htmlFor='name'>
                                            Card Number
                                        </label>
                                        <input type='Number' className='form-control' placeholder='Card Number'/>

                                    </div>
                                    

                                </Col>

                                <Col lg={6}>
                                    <div style={{marginTop:"6px"}}>
                                        <label htmlFor='name'>
                                            Expiry date
                                        </label>
                                        <input type='Number' className='form-control' placeholder='Expiry date'/>

                                    </div>
                                    

                                </Col>

                                <Col lg={6}>
                                    <div style={{marginTop:"6px"}}>
                                        <label htmlFor='name'>
                                            Security Code
                                        </label>
                                        <input type='Number' className='form-control' placeholder='Name On Card'/>

                                    </div>

                                </Col>

                                <Col lg={6}>
                                    <div style={{marginTop:"6px"}}>
                                        <label htmlFor='name' style={{fontWeight:'bold'}}>
                                        Deducted Amount
                                        </label >
                                        <input style={{fontWeight:'bold', color:'green'}} type='text' readonly  value='500 ruppes' className='form-control'/>

                                    </div>

                                </Col>




                                <button style={{marginTop:'20px',marginLeft:"10px"}} className="btn btn-primary" onClick={Book}>Pay</button>

                            </Row>
                        </form>
                    </ModalBody>

                    
                </Modal>


        </form>
        

    );

}

export default Client;
