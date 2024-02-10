import React from "react";
import image from '../images/supplychain_img1.jpg'
const  Img=()=>{

    return(

      <div style={{backgroundImage: `url(${image})`}}>

      </div>


        /*<img srcset="image-320w.jpg 320w,
             image-480w.jpg 480w,
             image-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
    src="/components/assets/supplychain_img1.jpg" alt="Descriptive Image Text"></img>*/
    )
    
}
export default Img
