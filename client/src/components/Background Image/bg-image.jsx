import { document } from 'postcss'
import '../../assets/animations/keyframeBackground.css'
import bgimg from '../../assets/images/townN.jpg'
import bgimg2 from '../../assets/images/building2.jpg'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'

export default function BgImage({image, className}){

  const thisRef = useRef(null)

  useLayoutEffect(()=>{
    
    const divElemnt = thisRef.current;

    if(divElemnt){

      divElemnt.classList.add(className)
      divElemnt.style.visibility = 'visible'
    }

  }, [image, className])

    return <div className={`m-0 p-0 overflow-x-hidden w-screen md:h-[90vh] max-w-full flex h-screen  bg-cover
     bg-center z-1 relative ease-in-out duration-400 transition-all ${className}`}
        style={{ backgroundImage: `url(${image}), url(${bgimg}), url(${bgimg2})`,
        willChange: 'background-image' 

        }}>
          <link rel="preload" href={bgimg}/>
          <link rel="preload" href={bgimg2}/>
        </div> 
   
}



