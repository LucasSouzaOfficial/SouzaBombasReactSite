import { useState } from "react"
import Carousel from "../Carousel/carousel"
import BgImage from "./bg-image"
import initialBackgroundImageURL from '../../assets/images/townN.jpg'

export default function BackgroundWithCarousel({children}){
    
    const initialBackgroundImage = initialBackgroundImageURL
    const [backgroundImage, setBackgroundImage] = useState(initialBackgroundImage)
    const [animationClass, setAnimationClass] = useState('initial');

    const handleBackgroundImage = (newImage)=>{
        setBackgroundImage(newImage)
    }


    return <>
        <BgImage image={backgroundImage} className={animationClass}/>
        <Carousel setBackground={handleBackgroundImage} animationClass={animationClass} setAnimationClass={setAnimationClass}>{children}</Carousel>
    </>

}
