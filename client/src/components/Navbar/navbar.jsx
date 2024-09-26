import NavbarButton from './navbar-button'
import { useState } from 'react'
import AdBar from './ad-bar'
import logo from '../../assets/images/logo.png'
import DropDownMenu from './dropdowmenu'

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
    <div className={`bg-transparent z-[2] w-screen h-20 md:h-24 fixed max-w-full items-center transition-all ease-in-out duration-300
          ${toggleNavBar? 'top-0 bg-white': 'top-10'}`}>

        <AdBar style={`text-white fixed top-0 md:flex w-screen m-auto items-start text-start hidden
                        transition-all ease-in-out duration-300 ${toggleNavBar? 'translate-y-[-40px] ' : 'translate-y-0'}`}/>

        <nav className="flex max-w-6xl md:relative m-auto items-center text-center max-h-20 md:h-28 justify-between">

            <button onClick={toggle} className='md:mt-4'>
                <img className='hidden md:flex h-18 mb-4 md:mt-4 m-2 p-2 md:w-40 md:h-24' src={logo}></img>
                <div className={`md:hidden text-[40px] rotate-90 w-28 h-18 p-2 m-auto ${toggleNavBar?'text-black': 'text-white'}`}>|||</div>
            </button> 

            <ul className={`md:flex md:mt-4 bg-sky-600 md:bg-transparent md:max-w-3xl gap-0 md:flex-row md:opacity-100 transition-opacity duration-300 ease-in-out 
               flex-col top-20 p-0 m-0 md:top-auto absolute md:relative justify-between text-white font-semibold md:w-fit w-screen z-[2]
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
                    ${hoveredIndex !== null && hoveredIndex !== index? 'opacity-30': 'opacity-100'} ${toggleNavBar? 'md:hover:text-primary-color [text-shadow:_0x_0px_0px_#000000]': ' [text-shadow:_2px_1px_2px_#000000]'}`}>


                    <a className="w-fit h-fit whitespace-nowrap m-auto transition-all md:text-xl ease-in-out duration-500 rounded " href={item}>
                      {item}
                    </a>
                    </li>
                ):( 

                 <li key={index} onMouseEnter={()=>{setHoveredIndex(index)}}
                    onMouseLeave={()=>{setHoveredIndex(null)}}
                    className={`md:p-2 lg:p-4 p-4 transition-opacity duration-500 ease-in-out cursor-pointer 
                    ${hoveredIndex !== null && hoveredIndex !== index || dropDowMenu? 'opacity-30': 'opacity-100'} ${toggleNavBar? '[text-shadow:_0x_0px_0px_#000000] md:hover:text-primary-color': ' [text-shadow:_2px_1px_2px_#000000]'}`}>

                    <a className="whitespace-nowrap m-auto pointer-events-auto transition-all md:text-xl ease-in-out duration-500 rounded " href={item}>
                      {item}
                    </a>

                 </li>)
                ))
              }  
          
            </ul>
            <DropDownMenu setVisibility={setDropDownMenu} dropdownmenu={dropDowMenu} isMouseOnMenu={setIsMouseInsideMenu} />
            <button className='md:hidden'>
                <img className='w-28 h-16 m-2' src={logo}></img>
            </button>

        </nav>
    </div>
  )
}
