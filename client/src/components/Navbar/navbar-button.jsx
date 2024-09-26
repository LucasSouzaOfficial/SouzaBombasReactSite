export default function NavbarButton(props){

    return <li className={`md:m-0 md:p-2 m-2 p-2 md:w-fit md:h-fit !hover:opacity-100 rounded md:transition-transform duration-500 transition-opacity`}>
        <a className="md:p-4 w-fit h-fit m-auto transition-colors !holver:opacity-100 ease-in-out duration-500
          rounded " href={props.src}>{props.text}</a>
    </li>
}
