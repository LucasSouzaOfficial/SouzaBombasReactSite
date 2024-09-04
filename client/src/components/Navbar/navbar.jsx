import NavbarButton from './navbar-button'
import { useState } from 'react'
import AdBar from './ad-bar'
import logo from '../../assets/images/logo.png'

export default function NavBar(){

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleNavBar, setToggleNavBar] = useState(false)
    //const logo = '../assets/images/logo.png'

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

    return <div className={`bg-transparent z-[2] w-screen h-20 md:h-24 fixed max-w-full items-center transition-all ease-in-out duration-300
    ${toggleNavBar? 'top-0 bg-white': 'top-10'}`}>
        <AdBar style={`className="bg-red text-white fixed top-0 md:flex w-screen max-w-full m-auto items-center text-center hidden
                        transition-all ease-in-out duration-300 ${toggleNavBar? 'translate-y-[-40px] ' : 'translate-y-0'}`}/>
        <nav className="flex max-w-6xl md:relative m-auto items-center text-center max-h-20 md:h-28 justify-between">
             <button onClick={toggle} className='md:mt-4'>
                <img className='hidden md:flex h-18 mb-4 md:mt-4 m-2 p-2 md:w-40 md:h-24' src={logo}></img>
                <div className={`md:hidden text-[40px] rotate-90 w-28 h-18 p-2 m-auto ${toggleNavBar?'text-black': 'text-white'}`}>|||</div>
            </button> 
            <ul className={`md:flex md:mt-4 w-screen bg-sky-600 md:bg-transparent md:max-w-xl md:flex-row md:opacity-100 transition-opacity 
            ease-in-out duration-300 flex-col top-20 p-0 m-0 md:top-auto absolute md:relative justify-between text-white md:p-1 gap-4 font-semibold text-lg
            ${toggleMenu? 'opacity-100': 'opacity-0'} ${toggleNavBar? 'md:text-black': 'text-white'}`}>
                <NavbarButton text="Home" src="/" />
                <NavbarButton text="About" src="/" />
                <NavbarButton text="Contact" src="/" />
                <NavbarButton text="Budget" src="/" />
            </ul>
            <button className='md:hidden'>
                <img className='w-28 h-16 m-2' src={logo}></img>
            </button>
    </nav>
    </div>

}
