import React from 'react'
import Mountain1 from '../assets/1.jpg';
import Mountain2 from '../assets/2.jpg';
import Mountain3 from '../assets/3.jpg';
import Mountain4 from '../assets/4.jpg';
import './Destination.css';



const Destination = () => {
  return (
    <div className='destination'>

      <h1>Popular Destination</h1>
      <p1>Tours give you the opportunity to see a lot within a time frame.</p1>

      <div className='first-des'>
        <div className='des-text'>
          <h2>Taal Volcano, Batangas</h2>
          <p2> Taal Volcano is the smallest active volcano in the world.
            <br />
            Its unexplained shape and location on an island within a lake within an island,
            makes it a unique geologic wonder, enthralling thousands of tourists and geologists yearly.
          </p2>
        </div>
        <div className='image'>
          <img alt='img' src={Mountain1} />
          <img alt='img' src={Mountain2} />
        </div>

      </div>

    </div>

  )
}

export default Destination