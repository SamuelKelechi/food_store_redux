import React from 'react'
import Slider from './Slider/Slider'
import HomeCard from './HomeCard/HomeCard'



function Screen() {
    return (
        <div>
            <Slider />
            <div style={{
                display:"flex",
                justifyContent:"center"
            }}>
            <HomeCard />
            </div>
           
        </div>
    )
}

export default Screen
