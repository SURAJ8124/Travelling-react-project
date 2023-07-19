import React from "react";
import Navbar from "./Navbar";
import NightImage from '../assets/night.jpg'
import Hero from "./Hero";
const Services =()=>{
return(<>

<Navbar />
            <Hero
                cName="hero-mid"
                heroImg={NightImage}
                title="About"
                btnClass="hide"
            />
</>);
}

export default Services;