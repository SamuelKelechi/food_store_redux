import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Images/Logo.png'
import First from '../Images/1.jpg'
import Second from '../Images/2.bmp'
import Third from '../Images/3.jpeg'
import Fourth from '../Images/4.png'
import Fifth from '../Images/5.png'
import Sixth from '../Images/6.jpg'
import "./Header.css"




import {
    ShoppingCartOutlined
  } from '@ant-design/icons';


const Head = () => {
    return (
        <div>
            <Header className="Header_Main"> 

            <Link to="/" style={{color:"white"}}>
                <div><img src={Logo} alt="Logo" style={{
                    height:"60px",
                    width:"70px",
                    marging:"5px"
                }} /></div>
            </Link>
            
            <marquee className="Head_Container">

            
            <img src={First} style={{
                width:"70px",
                height:"50px",
                margin:"20px"
            }} alt="First"/>
            <b>Pepper Soup</b>
            
            
            <img src={Second} alt="second" style={{
                width:"70px",
                height:"50px",
                margin:"20px"
            }} />
            <b>African Salad</b>

            <img src={Third} alt="third" style={{
                width:"70px",
                height:"50px",
                margin:"20px"
            }} />
            <b>Ganished Sauce</b>

            <img src={Fourth} alt="fourth" style={{
                width:"80px",
                height:"60px",
                margin:"20px"
            }} />
            <b>Egusi Soup</b>

            <img src={Fifth} alt="fifth" style={{
                width:"70px",
                height:"50px",
                margin:"20px"
            }} />
           <b>Nkwobi</b>
 
            <img src={Sixth} alt="sixth" style={{
                width:"70px",
                height:"50px",
                margin:"20px"
            }} />
            <b>Rice and Stew</b>
            </marquee>
        
            <Link to="/cart" style={{color:"white"}}>
                <div  style={{
                    display:"flex",
                    fontSize:"20px",
                    width:"30px",
                    alignItems:"center"
                }}>
                <div>
                    <ShoppingCartOutlined/>
                </div>
                
                <div>
                    0
                </div>
                </div>
            </Link>
            
            </Header>
            
        </div>
    )
}

export default Head;