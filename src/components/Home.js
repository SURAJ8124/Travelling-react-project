import React from 'react';
import Navbar from "./Navbar";
import Hero from './Hero';
import Destination from './Destination';
import Trip from './Trip';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero
        cName=" hero"
        heroImg="https://images.unsplash.com/photo-1508864284229-28a2d426f10c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title="Your Journey your story"
        text="Choose your fevourite destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <Trip/>
    </div>
  );
};

export default Home;
