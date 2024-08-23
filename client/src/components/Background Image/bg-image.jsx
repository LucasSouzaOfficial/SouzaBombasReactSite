import { useState } from "react";
import { useEffect } from "react";

export default function BgImage({image, isChanged}){
    const [x, setX] = useState(false);

  

    return <div className={`m-0 p-0 overflow-x-hidden w-screen max-w-full flex h-screen md:h-[80vh] bg-cover
     bg-center z-1 relative ease-in-out duration-500 transition-all ${x? 'opacity-0': 'opacity-100'}`}
        style={{ backgroundImage: `url(${image})`}}>
           
        </div>
   
}