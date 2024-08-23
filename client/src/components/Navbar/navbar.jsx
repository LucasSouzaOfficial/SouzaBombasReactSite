import NavbarButton from './navbar-button'
import { useState } from 'react'
import AdBar from './ad-bar'

export default function NavBar(){

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleNavBar, setToggleNavBar] = useState(false)
    const logo = '/logo.png'
    console.log(logo)

    const toggle = ()=>{
        setToggleMenu(!toggleMenu)
    }

    const fixNavBarAtTop =()=>{
        if(window.scrollY > 0){
            setToggleNavBar(true)
        }else{
            setToggleNavBar(false)
        }
    }

    window.addEventListener('scroll', fixNavBarAtTop)

    return <div className={`bg-transparent z-[2] w-screen h-16 md:h-24 fixed max-w-full items-center transition-all ease-in-out duration-300
    ${toggleNavBar? 'top-0 bg-white': 'top-10'}`}>
        <AdBar style={`className="bg-red text-white fixed top-0 md:flex w-screen max-w-full m-auto items-center text-center hidden
                        transition-all ease-in-out duration-300 ${toggleNavBar? 'translate-y-[-40px] ' : 'translate-y-0'}`}/>
        <nav className="flex max-w-6xl md:relative m-auto items-center text-center max-h-20 md:h-28 justify-between">
            <div className='md:mt-4'>
                <img className='w-28 h-18 mb-4 :m-2 p-2 md:w-40 md:h-24' src={logo}></img>
            </div>
            <ul className={`md:flex md:mt-4 w-screen bg-sky-600 md:bg-transparent md:max-w-xl md:flex-row md:opacity-100 transition-opacity 
            ease-in-out duration-300 flex-col top-16 p-0 m-0 md:top-auto absolute md:relative justify-between text-white md:p-1 gap-4 font-semibold text-lg
            ${toggleMenu? 'opacity-100': 'opacity-0'} ${toggleNavBar? 'md:text-black': 'text-white'}`}>
                <NavbarButton text="Home" src="/" />
                <NavbarButton text="About" src="/" />
                <NavbarButton text="Contact" src="/" />
                <NavbarButton text="Budget" src="/" />
            </ul>
            <button onClick={toggle} className='bg-sky-600 text-base p-2 mx-2 m-0 mb-2 rounded text-white font-bold md:hidden text-center h-10'>LOGO</button>
    </nav>
    </div>

}