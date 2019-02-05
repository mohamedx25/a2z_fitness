import React from 'react'
import promo from './images/promo.mov'

const Video = () => (
    <div>
        <video autoPlay >
            <source src={promo} /> 
        </video>
    </div>
)

export default Video;