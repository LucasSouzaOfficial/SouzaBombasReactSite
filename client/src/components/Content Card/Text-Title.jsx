export default function TextTitle({title, css}){
    return <div className={`max-w-full flex mb-0 text-start font-sans font-boldp p-4 w-full`}>
            <h2 className={`text-start tracking-tight ${css} font-bold`}>{title}</h2>
        </div>
}
