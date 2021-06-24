import React from 'react'
import './HomeCard.css'
import TestImg from '../Images/1.jpg'
import { Button } from 'antd'


function HomeCard() {
    return (
        <div  className="Card_Container">
            <div className="Card_Wrapper">
                <div className="Image_Wrapper">
                    <img src={TestImg} alt="TestImg"/>
                </div>
                <div className="Price_container">Price</div>
                <div className="Title_Wrapper">
                    <h3>Pepper Soup</h3>
                </div>
                <div className="Button_Wrapper">
                    <Button style={{
                        borderRadius:"5px",
                        width:"100px",
                        height:"40px"                    }}
                    type="primary"
                    color="blue"
                    >
                    View
                    </Button>
                    <button className="HomeCard_Button" >
                        Add to Cart
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default HomeCard
