import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Footer(){
  return (
    <>
    <footer className="footer bg-primary" >
      <div className="container">
        <div className="row">
          <div className="col-md-9" style={{padding:"20px"}}>
            <h5>About Us</h5>
            <p>We are a team of developers passionate about building awesome web applications using the MERN stack.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">&copy; 2024 Your Company Name. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
</>
  );
};

export default Footer;
