import React from 'react'
import AllCartCard from './AllCartCard/AllCartCard'
import AllCartSide from './AllCartSide/AllCartSide'

function AllCart() {
    return (
        <div style={{
            display:"flex"
        }}>
            <AllCartSide />
            <AllCartCard />
        </div>
    )
}

export default AllCart
