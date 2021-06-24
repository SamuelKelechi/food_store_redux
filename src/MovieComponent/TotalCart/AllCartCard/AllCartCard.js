import { Button } from 'antd'
import React from 'react'
import './AllCartCard.css'

function AllCartCard() {
    return (
        <div className="AllCart_Container">
        <br/>
        <br/>
        <br/>
        <br/>
          <div>
            <Button type="primary" className="Mobile_Button">
              Pay Now
            </Button>
          </div>
          <div>
            This is My Cart
          </div>
        </div>
    )
}

export default AllCartCard
