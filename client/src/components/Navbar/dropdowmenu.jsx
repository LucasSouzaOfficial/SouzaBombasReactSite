export default function DropDownMenu({setVisibility,dropdownmenu, isMouseOnMenu}){
 
  const menuOptions = ['Bombas de agua', 'Bombas submersívas', 'Pressurizadores',
                       'Bombas industriais', 'Bombas caneta', 'Bombas sapo',
                       'Bombas predias', 'Bombas de incêndio']

  return(
    <div onMouseLeave={()=>{setVisibility(false), isMouseOnMenu(false)}} onMouseEnter={()=>{isMouseOnMenu((prevState)=>{isMouseOnMenu(true)}), dropdownmenu && isMouseOnMenu? setVisibility(true): ''}}
      className={`${dropdownmenu? 'opacity-100': 'opacity-0 z-[1]'} absolute top-14 p-4
      rounded min-w-full flex flex-col justify-between min-h-32 transition-all ease-in-out duration-500`}>
      <div className="bg-transparent h-10 left-0 w-full right-0 top-14"></div>
      <ul className="grid grid-cols-4 gap-4 p-4 rounded justify-between w-full font-semibold text-center bg-white">
        {
          menuOptions.map((option, index)=>(
            <li key={index} className="text-start p-2 text-black text-base hover:text-primary-color transiton-colors ease-in-out duration-300">
              <a href={option}>
                {option}
              </a>
            </li>
            
          ))
        }
      </ul>
    </div>  


    )
}
