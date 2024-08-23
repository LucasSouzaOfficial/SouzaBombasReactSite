export default function TextTitle(props){
    return <div className='max-w-full flex text-2xl md:text-4xl text-center font-sans font-boldp m-2 p-2 w-full'>
            <h1 className="text-center m-auto text-3xl">{props.title}</h1>
        </div>
}