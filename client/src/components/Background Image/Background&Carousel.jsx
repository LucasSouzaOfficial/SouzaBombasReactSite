import { useState } from "react"
import Carousel from "../Carousel/carousel"
import BgImage from "./bg-image"

export default function BackgroundWithCarousel({children}){

    const [backgroundImage, setBackgroundImage] = useState('/building2.jpg')

    const handleBackgroundImage = (newImage)=>{
        setBackgroundImage(newImage)
    }

    return <>
        <BgImage image={backgroundImage}/>
        <Carousel setBackground={handleBackgroundImage}>{children}</Carousel>
    </>

}