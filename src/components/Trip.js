import React from 'react'
import TripData from './TripData';
import Trip1 from '../assets/5.jpg';
import Trip2 from'../assets/6.jpg';
import Trip3 from'../assets/9.jpg';

const Trip = () => {
    return (
        <>
            <div className='trip'>
                <h1>Recent trips</h1>
                <p>You can discover unique destinantion using google maps.</p>
                <div className='tripcard'>
                    <TripData image={Trip1} heading="Trip in Indonesia" text="Tourism in Indonesia is an important component of the Indonesian
                    economy as well as a significant source of its foreign exchange revenues. Indonesia was ranked at 20th in the world
                      tourist Industry in 2017, 
                        Denpasar, Jakarta and Batam are among of 10 cities in the world with fastest growth in tourism, 
                          32.7, 29.2 and 23.3 percent respectively.[2] The tourism sector ranked as the 4th largest among goods
                             and services export sectors.[3]"/>
                              <TripData image={Trip2} heading="Trip in Indonesia" text=""/>
                              <TripData image={Trip3} heading="Trip in Indonesia" text=""/>

                </div>
            </div>
        </>
    )
}

export default Trip