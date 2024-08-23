export default function Button(props){
    return <button className='bg-sky-600 text-sm text-white m-auto my-4 md:h-fit md:w-fit p-4 min-w-32 text-center shadow-black font-semibold rounded
    hover:translate-y-[-4px] hover:scale-105 transition-all ease-in-out duration-200'>
            <p className="text-center m-auto items-center">{props.text}</p>
        </button>
}