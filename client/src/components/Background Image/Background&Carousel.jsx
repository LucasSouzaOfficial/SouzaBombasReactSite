import { useState } from "react"
import Carousel from "../Carousel/carousel"
import BgImage from "./bg-image"
import initialBackgroundImage from '../../assets/images/townN.jpg'

export default function BackgroundWithCarousel({children}){

    const [backgroundImage, setBackgroundImage] = useState(initialBackgroundImage)
    const [animationClass, setAnimationClass] = useState('initial_state');

    const handleBackgroundImage = (newImage)=>{
        setBackgroundImage(newImage)
    }


    return <>
        <BgImage image={backgroundImage} className={animationClass}/>
        <Carousel setBackground={handleBackgroundImage} animationClass={animationClass} setAnimationClass={setAnimationClass}>{children}</Carousel>
    </>

}