import { Button } from 'antd'
import React from 'react'
import './AllCartSide.css'


function AllCartCard() {
    return (
        <div className="AllCart_SideContainer">
            <div className="AllCart_Menus">
            <br/>
        <br/>
        <br/>
        <br/>
                <div style={{fontSize:"20px"}}>Summary</div>
                <div>Total in Cart: 0</div>
                <div>Total Cost: 0</div>
                <Button style={{
                    width:"120px"
                }}
                type= "primary"
                >Pay Now
                </Button>
            </div>
        </div>
    )
}

export default AllCartCard
