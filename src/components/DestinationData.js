import "./Destination.css";


import React from 'react'

const DestinationData = (Props) => {
  return (
    <>
    
    <div className={Props.className}>
        <div className='des-text'>
          <h2> {Props.heading}</h2>
          <p2> {Props.text}</p2>
        </div>
        <div className='image'>
          <img alt='img' src={Props.Mountain1} />
          <img alt='img' src={Props.Mountain2} />
        </div>

      </div>
    </>
  )
}

export default DestinationData