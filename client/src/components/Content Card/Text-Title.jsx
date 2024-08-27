export default function TextTitle({title, css}){
    return <div className={`max-w-full flex mb-0 text-center font-sans font-boldp m-2 p-2 w-full ${css}`}>
            <h2 className="text-center m-auto text-3xl tracking-tight font-bold">{title}</h2>
        </div>
}
