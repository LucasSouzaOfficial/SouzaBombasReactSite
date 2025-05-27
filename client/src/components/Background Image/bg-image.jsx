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

    return <div className={`m-0 p-0 overflow-x-hidden w-screen md:h-[90vh] max-w-full flex h-[90vh]  bg-cover
     bg-center z-1 relative ease-in-out duration-400 transition-all overflow-hidden`}
        >
          <img alt=""  className="absolute " src={bgimg2} />
          <img alt="" className={`absolute min-w-[1200px] transition-all duration-700 ease-in-out ${className}`} src={bgimg}/>
           <div className="absolute inset-0 backdrop-brightness-75 pointer-events-none"></div>
        </div> 
   
}



