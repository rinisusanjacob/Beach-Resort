import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner from './Banner';




function Hero({children,hero}) {
    
    
    
        if(hero=='defaultHero')
        {
            return(
        <div className=" carousel defaultHero">
         
         <Carousel infiniteLoop useKeyboardArrows autoPlay swipeable stopOnHover interval={6000} showThumbs={false} transitionTime={3000} onClickItem >
             
        <div>
            <img className="Simg" src="https://xplorely.com/wp-content/uploads/2020/11/b1.jpg" />
            
        </div>
        <div>
            <img className="Simg" src="https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=745&h=373&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2020%2F05%2F14%2Fgettyimages-820873998.jpg" />
            </div>
            
        <div>
            <img className="Simg" src="https://www.indochinatour.com/assets/images/vietnam-travel-guide/vietnam-beach-resort-banner.jpg" />
           
        </div>
    </Carousel>
   
    </div>)
        }else{
            return(
         <header className={hero}>
            {children}
            
    </header>)
        }
}


      
    


export default Hero
