import React from 'react'
import car from './image/car.jpg';
import car2 from './image/car2.jpg';
import car33 from './image/car33.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  return (
    <div style={{ marginTop: "110px" }}>
      {/* that is carsoloe */}
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={car} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>super car in this era</h5>
              <p>best car we are this street and that is much more best part</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={car2} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>super car in this era</h5>
              <p>best car we are this street and that is much more best part</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={car33} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>super car in this era</h5>
              <p>best car we are this street and that is much more best part</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div>
        <center><h1 style={{ fontSize: 80 }}>Latest Car Updates</h1></center>
      </div>
      <div style={{ padding: 20, fontWeight: 'bold' }}>
        <p>Are you planning on buying a new car? Well, we know that with so many car options available out there, it gets really difficult to find a good car which suits your need. Hence, we have put together a complete list of new cars. Maruti Suzuki, Tata and Toyota are the 3 most popular car brands. These popular car brands cater to a wide spectrum of budgets and needs, offering a variety of cars from fuel-efficient hatchbacks to spacious SUVs. The 5 most popular cars are Maruti Suzuki Fronx, Mahindra Scorpio N, Mahindra Scorpio, Tata Nexon and Hyundai Creta. Explore the complete list of cars by exploring different brands or by applying multiple filters such as budget, fuel type, body type etc. You can find the car that suits you best from the list of cars below.</p>
      </div>




      {/* that is the cards of cars */}


      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <img src={car} class="card-img-top" alt="car" />
              <div class="card-body">
                <h5 class="card-title">Toyota</h5>
                <p class="card-text">Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari, the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars.</p>
                {/* that is the button */}
                <center><button className='btn btn-primary' onClick={()=>navigate("/Login")}>BOOK ! </button></center>


              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src={car2} class="card-img-top" alt="car" />
              <div class="card-body">
                <h5 class="card-title">ferrari</h5>
                <p class="card-text">Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari, the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars.</p>
                {/* that is the button */}
                <center><button className='btn btn-primary' onClick={()=>navigate("/Login")}>BOOK ! </button></center>


              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img src={car33} class="card-img-top" alt="car " />
              <div class="card-body">
                <h5 class="card-title">Maruti Suzuki</h5>
                <p class="card-text">Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari, the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars.</p>
                {/* that is the button */}
                <center><button className='btn btn-primary' onClick={()=>{toast('Booking successful!');navigate("/Login");}}>BOOK ! </button></center>


              </div>
            </div>
          </div>
        </div>
      </div>





    </div> //that is the home page 
  )
}

export default Home