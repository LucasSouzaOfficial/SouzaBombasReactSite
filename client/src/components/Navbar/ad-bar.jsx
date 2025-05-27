export default function AdBar(props){

    return <div className={props.style}>
        <ul className="flex gap-3 m-auto w-screen max-w-6xl">
            <li className="transition-color duration-500 ease-in-out hover:text-white/50 cursor-pointer">
                <a className="cursor-pointer" href="">(41) 3286-3946</a>
            </li >
             <div className="font-light">|</div>
            <li className="transition-color duration-500 ease-in-out hover:text-white/50 cursor-pointer">
                <a href="">vendas@souzabombas.com.br</a>
            </li>
        </ul>
    </div>

}
