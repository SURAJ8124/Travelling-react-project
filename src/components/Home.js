import React from 'react';
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div>
       <Navbar/>
      <h2>Welcome to Home Services</h2>
      <p>
        We are your one-stop solution for all home services. Whether you need plumbing, electrical
        work, painting, or any other home-related service, we've got you covered.
      </p>
      <p>Contact us now to get the best quotes for your home improvement needs!</p>
    </div>
  );
};

export default Home;
