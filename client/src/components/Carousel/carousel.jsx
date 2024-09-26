import { useState } from 'react'
import LeftArrow from "./leftArrow"
import RightArrow from "./rightArrow"
import bgImage01 from '../../assets/images/building2.jpg'
import bgImage02 from '../../assets/images/townN.jpg'
import { useEffect } from 'react'

export default function Carousel({children, setBackground, setAnimationClass}){

    const [carouselIndex, setCarouselIndex] = useState(0) 
    const [transitioning, setTransitioning] = useState(false)
    const BackgroundImages = [bgImage01, bgImage02]
    
  function nextSlide(){

        if(transitioning){

            return

        }else{
           
           setTransitioning(true)

            setTimeout(()=>{
                setTransitioning(false)
            }, 900)


           
            setTimeout(()=>{
              setCarouselIndex((carouselIndex) => (carouselIndex === children.length - 1 ? 0 : carouselIndex + 1))
              },420)

            setTimeout(()=>{setBackground(BackgroundImages[carouselIndex])}, 200); 

            setAnimationClass(prevClass => prevClass === 'anime-fade-in' ? 'anime-fade-out': 'anime-fade-in'
                                            
            );
            
            return

        }

    }

    return <div className="flex-row m-auto w-screen absolute max-w-full top-[200px] md:top-72">

        <button onClick={nextSlide} className="rounded absolute top-56 right-0 translateY-[-50%] mr-4 z-[1] hidden md:block"> 
            <RightArrow /> 
        </button>

        <button onClick={nextSlide} className="rounded absolute top-56 left-0 translateY-[-50%] ml-4 z-[1]  md:block">
            <LeftArrow/>
        </button>

        <div className=" w-full flex justify-between max-w-[90vw] md:max-w-[94vw] xl:max-w-[82vw] 2xl:max-w-[62vw] m-auto overflow-hidden">
            <div className={`w-full flex justify-between  m-auto
            ease-in-out duration-500 relative ${transitioning? 'opacity-0': 'opacity-100'}`}

            style={{transform: `translateX(-${carouselIndex * 100}%)`}}>                           
                {children}
            </div>
        </div>
    </div>

}
