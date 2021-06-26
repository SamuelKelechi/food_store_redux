import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './Slider.css'



function Slider() {
    return (
        <div>
            <Carousel autoplay>

                <div className="First_Slide">
                   <div> 1</div>
                </div>
                <div className="Second_Slide">
                    <div> 2</div>
                </div>
                <div className="Third_Slide">
                    <div> 3</div>
                </div>
                <div className="Fourth_Slide">
                   <div> 4</div>
                </div>

            </Carousel>     
        </div>
    )
}

export default Slider
