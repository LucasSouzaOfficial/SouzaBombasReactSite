export default function Button({text, css}){
    return <button className={`text-sm text-white mx-3 md:h-fit md:w-fit p-4 min-w-32 text-center shadow-black font-semibold rounded
    hover:translate-y-[-4px] hover:scale-[1.02] transition-all ease-in-out duration-300 ${css}`}>
            <p className="text-center m-auto items-center">{text}</p>
        </button>
}
