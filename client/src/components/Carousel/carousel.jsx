import { useState } from 'react'
import LeftArrow from "./leftArrow"
import RightArrow from "./rightArrow"

export default function Carousel({children, setBackground}){

    const [carouselIndex, setCarouselIndex] = useState(0)
    const [slideAnimation, setSlideAnimation] = useState(true)  
    const [transitioning, setTransitioning] = useState(false)
    const [Index, setNextIndex] = useState(0)

    const BackgroundImages = ['/building3.jpg', '/building2.jpg']

    const nextImage = () => {
        setNextIndex((prevIndex) => {
          return (prevIndex + 1) % BackgroundImages.length;
        });
      };

    const animateSlide = () =>{

            setSlideAnimation(false)

            setTimeout(()=>{
                setSlideAnimation(true)
            }, 650)

    }
    
    function TransitioningGoingOn() {

        setTransitioning(true)

        setTimeout(()=>{
            setTransitioning(false)
        }, 720)
    }

    function nextSlide(){

        if(transitioning){
            return
        }

        nextImage()
        setBackground(BackgroundImages[Index])

        TransitioningGoingOn()
        animateSlide()

        setTimeout(()=>{setCarouselIndex((carouselIndex) => (carouselIndex === children.length - 1 ? 0 : carouselIndex + 1))}, 500)
        return
    }

    return <div className="flex-row m-auto w-screen absolute max-w-full overflow-x-hidden top-48">

        <button onClick={nextSlide} className="
        bg-[#0284c7] rounded absolute top-56 right-0 translateY-[-50%] mr-4 z-[2] hidden md:block"> 
            <RightArrow /> 
        </button>

        <button onClick={nextSlide} className="
        bg-[#0284c7] rounded absolute top-56 left-0 translateY-[-50%] ml-4 z-[2] hidden md:block">
            <LeftArrow/>
        </button>

        <div className=" w-screen flex justify-between max-w-5xl m-auto overflow-hidden">
            <div className={`w-screen flex justify-between m-auto transition-opacity 
            ease-in-out duration-700 md:bg-gradient-to-r from-slate-900
            relative max-w-5xl md:max-h-72 max-h-72 ${slideAnimation ? 'opacity-100': 'opacity-0'}`}

            style={{transform: `translateX(-${carouselIndex * 100}%)`}}>                           
                {children}
            </div>
        </div>
    </div>

}