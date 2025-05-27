import NavbarButton from './navbar-button'
import { useState } from 'react'
import AdBar from './ad-bar'
import logo from '../../assets/images/logo.png'
import DropDownMenu from './dropdowmenu'
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar(){

    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleNavBar, setToggleNavBar] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [dropDowMenu, setDropDownMenu] = useState(false)
    const [isItemHovered, setIsItemHovered] =useState(false)
    const [isMouseInsideMenu, setIsMouseInsideMenu] = useState(false)

   const toggle = ()=>{
        setToggleMenu(!toggleMenu)
    }

    const fixNavBarAtTop =()=>{
        if(window.scrollY > 20){
            setToggleNavBar(true)
        }else{
            setToggleNavBar(false)
        }
    }

    window.addEventListener('scroll', fixNavBarAtTop)

    
    const navMenuLinks = ['Home', 'Sobre nós', 'Orçamentos', 'Produtos', 'Contato']  

    return (
    <div className={`bg-transparent z-[2] top-0 w-screen h-18 md:h-20 fixed max-w-full items-center transition-all ease-in-out duration-300
          ${toggleNavBar? 'top-0 bg-white': 'top-10'}`}>

        <AdBar style={`text-white fixed top-0 my-2 hidden h-0 md:h-auto display-none md:flex w-screen m-auto items-start text-start text-sm 
                        transition-all ease-in-out duration-300 ${toggleNavBar? 'translate-y-[-40px] ' : 'translate-y-0'}`}/>

        <nav className="flex top-0 md:top-auto max-w-6xl md:relative m-auto items-center text-center max-h-20 md:h-16 justify-between">

            <button className='md:mt-4'>
                <img className='md:flex w-28 h-18 mb-4 md:mt-4 m-2 p-2 md:w-28 md:h-18 my-auto' src={logo}></img>

            </button> 

            <ul className={`md:flex md:mt-4 bg-sky-600 md:bg-transparent md:max-w-3xl gap-0 md:flex-row md:opacity-100 transition-opacity duration-300 ease-in-out 
               flex-col top-20 p-0 m-0 md:top-auto absolute md:relative justify-between text-white font-medium md:w-fit w-screen z-[2]
               ${toggleMenu? 'opacity-100': 'opacity-0 z-0'} ${toggleNavBar? 'md:text-black': 'text-white'}`}>
  
               {
                navMenuLinks.map((item, index)=>(
                  
                  item === 'Produtos'?(
                    <li key={index} onMouseEnter={()=>{setHoveredIndex(index), setDropDownMenu(true), setIsItemHovered(true)}}
                    onMouseLeave={()=>{setHoveredIndex(null), setIsItemHovered(false),setDropDownMenu((prevState)=>{
                        if(!isMouseInsideMenu && !isItemHovered){
                            setDropDownMenu(!prevState)}
                        })}}
                    className={`md:p-2 lg:p-4 p-4 transition-opacity duration-500 ease-in-out cursor-pointer
                    ${hoveredIndex !== null && hoveredIndex !== index? 'opacity-30': 'opacity-100'} ${toggleNavBar? 'md:hover:text-primary-color ': ' '}`}>


                    <a className="w-fit h-fit whitespace-nowrap m-auto transition-all md:text-base ease-in-out duration-500 rounded " href={item}>
                      {item}
                    </a>
                    </li>
                ):( 

                 <li key={index} onMouseEnter={()=>{setHoveredIndex(index)}}
                    onMouseLeave={()=>{setHoveredIndex(null)}}
                    className={`md:p-2 lg:p-4 p-4 transition-opacity duration-500 ease-in-out cursor-pointer 
                    ${hoveredIndex !== null && hoveredIndex !== index || dropDowMenu? 'opacity-30': 'opacity-100'} ${toggleNavBar? 'md:hover:text-primary-color': ''}`}>

                    <a className="whitespace-nowrap m-auto pointer-events-auto transition-all md:text-base ease-in-out duration-500 rounded " href={item}>
                      {item}
                    </a>

                 </li>)
                ))
              }  
          
            </ul>
            <DropDownMenu setVisibility={setDropDownMenu} dropdownmenu={dropDowMenu} isMouseOnMenu={setIsMouseInsideMenu} />
            <button  onClick={toggle} className='md:hidden mx-4'>
                <div className={`md:hidden mx-4 my-auto ${toggleNavBar?'text-black': 'text-white'}`}>
                  <GiHamburgerMenu size={28} />
                </div>
              
            </button>

        </nav>
    </div>
  )
}
