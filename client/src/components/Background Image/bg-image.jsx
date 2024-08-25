import '../../assets/animations/keyframeBackground.css'

export default function BgImage({image, className}){


    return <div className={`m-0 p-0 overflow-x-hidden w-screen max-w-full flex h-screen md:h-[80vh] bg-cover
     bg-center z-1 relative ease-in-out duration-400 transition-all ${className}`}
        style={{ backgroundImage: `url(${image})`}}>
        </div>
   
}



