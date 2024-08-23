export default function NavbarButton(props){

    return <li className="md:m-0 md:p-0 m-2 p-2 md:w-fit md:h-fit rounded hover:scale-105 hover:translate-x-1 
    md:transition-transform duration-500 transition-opacity">
        <a className="md:p-4 w-fit h-fit m-auto transition-colors ease-in-out duration-500
            hover:bg-sky-600 rounded hover:scale-105 hover:translate-x-1 hover:drop-shadow-xl hover:shadow-xl" href={props.src}>{props.text}</a>
    </li>
}