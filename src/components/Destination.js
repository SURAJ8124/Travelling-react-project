import React from 'react'
import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/3.jpg';
import Mountain4 from '../assets/4.jpg';
import './Destination.css';
import DestinationData from './DestinationData';



const Destination = () => {
  return (
    <div className='destination'>

      <h1>Popular Destination</h1>
      <p1>Tours give you the opportunity to see a lot within a time frame.</p1>

    <DestinationData heading="Taal Volcano, Batangas" text="Taal Volcano is the smallest active volcano in the world.
            Its unexplained shape and location on an island within a lake within an island,
            makes it a unique geologic wonder, enthralling thousands of tourists and geologists yearly."
            Mountain1={Mountain1} Mountain2={Mountain2} className="first-des"/>

<DestinationData heading="Taal Volcano, Batangas" text="Taal Volcano is the smallest active volcano in the world.
            Its unexplained shape and location on an island within a lake within an island,
            makes it a unique geologic wonder, enthralling thousands of tourists and geologists yearly."
            Mountain1={Mountain3} Mountain2={Mountain4} className="first-des-reverse"/>
    </div>

  )
}

export default Destination