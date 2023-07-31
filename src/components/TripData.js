import React from 'react'
import "./TripStyle.css";

const TripData = (Props) => {
    return (
        <>
            <div className='t-card'>
                <div className='t-image'>
                    <img src={Props.image} alt="i" />
                </div>
                <h4>{Props.heading}</h4>
                <p>{Props.text}</p>
            </div>
        </>
    )
}

export default TripData