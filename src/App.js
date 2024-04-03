// import react from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/'Component={Home}/>
      </Routes>

      
      <Routes>
        <Route path='/About'Component={About}/>
      </Routes>

      <Routes>
        <Route path='/Contact'Component={Contact}/>
      </Routes>
   
   
      <Routes>
        <Route path='/Login'Component={Login}/>
      </Routes>
   
   
      <Routes>
        <Route path='/Signup'Component={Signup}/>
      </Routes>
   

  


      

      
      
    </>
  );
}

export default App;
  