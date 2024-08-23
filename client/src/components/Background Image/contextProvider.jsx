import { createContext, useContext } from 'react'
import { useState } from 'react'

export const sliderContext = createContext({ bgImage: null, setBgImage: () => {} })

export default function ContextProvider({children}){

    const [bgImage, setBgImage] = useState(0)

    return <sliderContext.Provider value={{bgImage , setBgImage}}>
        {children}
    </sliderContext.Provider>
}