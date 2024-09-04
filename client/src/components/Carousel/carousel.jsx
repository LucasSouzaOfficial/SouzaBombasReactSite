import { useState } from 'react'
import LeftArrow from "./leftArrow"
import RightArrow from "./rightArrow"
import bgImage01 from '../../assets/images/building2.jpg'
import bgImage02 from '../../assets/images/townN.jpg'

export default function Carousel({children, setBackground, setAnimationClass}){

    const [carouselIndex, setCarouselIndex] = useState(0) 
    const [transitioning, setTransitioning] = useState(false)
    const BackgroundImages = [bgImage01, bgImage02]
    
  function nextSlide(){

        if(transitioning){

            return

        }else{
            
            setCarouselIndex((carouselIndex) => (carouselIndex === children.length - 1 ? 0 : carouselIndex + 1))

            setTimeout(()=>{setBackground(BackgroundImages[carouselIndex])}, 200);
                
            setTransitioning(true)

            setTimeout(()=>{
                setTransitioning(false)
            }, 800)

                        setAnimationClass(prevClass => prevClass === 'anime-fade-in' ? 'anime-fade-out': 'anime-fade-in'
                                            
            );
            
            return

        }

    }

    return <div className="flex-row m-auto w-screen absolute max-w-full top-48">

        <button onClick={nextSlide} className="rounded absolute top-56 right-0 translateY-[-50%] mr-4 z-[1] hidden md:block"> 
            <RightArrow /> 
        </button>

        <button onClick={nextSlide} className="rounded absolute top-56 left-0 translateY-[-50%] ml-4 z-[1]  md:block">
            <LeftArrow/>
        </button>

        <div className=" w-screen flex justify-between lg:max-w-5xl max-w-[95vw] md:max-w-[92vw] m-auto overflow-hidden">
            <div className={`w-screen flex justify-between max-w-[95vw] md:max-w-5xl transition-all m-auto
            ease-in-out duration-700 relative md:max-h-72 max-h-96`}

            style={{transform: `translateX(-${carouselIndex * 100}%)`}}>                           
                {children}
            </div>
        </div>
    </div>

}
