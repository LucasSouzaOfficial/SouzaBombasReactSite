import { useState } from 'react'
import LeftArrow from "./leftArrow"
import RightArrow from "./rightArrow"
import bgImage01 from '../../assets/images/building2.jpg'
import bgImage02 from '../../assets/images/townN.jpg'

export default function Carousel({children, setBackground, setAnimationClass}){

    const [carouselIndex, setCarouselIndex] = useState(0) 
    const [transitioning, setTransitioning] = useState(false)
    const [Index, setNextIndex] = useState(0)

    const BackgroundImages = [bgImage01, bgImage02]

    const updateIndex = () => {
        setNextIndex((prevIndex) => {
          return (prevIndex + 1) % BackgroundImages.length;
        });
      };


    function nextSlide(){

        if(transitioning){

            return

        }else{
            updateIndex();
            setBackground(BackgroundImages[Index])
                
            setTransitioning(true)

            setTimeout(()=>{
                setTransitioning(false)
            }, 720)

            setTimeout(()=>{
                setCarouselIndex((carouselIndex) => (carouselIndex === children.length - 1 ? 0 : carouselIndex + 1))
            }, 500)

            setAnimationClass(prevClass =>
                prevClass === 'anime-fade-in' ? 'anime-fade-out' : 'anime-fade-in'
            );
            
            return

        }

    }

    return <div className="flex-row m-auto w-screen absolute max-w-full overflow-x-hidden top-48">

        <button onClick={nextSlide} className="
        bg-[#0284c7] rounded absolute top-56 right-0 translateY-[-50%] mr-4 z-[1] hidden md:block"> 
            <RightArrow /> 
        </button>

        <button onClick={nextSlide} className="
        bg-[#0284c7] rounded absolute top-56 left-0 translateY-[-50%] ml-4 z-[1] hidden md:block">
            <LeftArrow/>
        </button>

        <div className=" w-screen flex justify-between max-w-5xl m-auto overflow-hidden">
            <div className={`w-screen flex justify-between m-auto transition-all
            ease-in-out duration-700 md:bg-gradient-to-r from-slate-900
            relative max-w-5xl md:max-h-72 max-h-72`}

            style={{transform: `translateX(-${carouselIndex * 100}%)`}}>                           
                {children}
            </div>
        </div>
    </div>

}