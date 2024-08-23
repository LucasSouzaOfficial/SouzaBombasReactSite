import TextTitle from "./Text-Title"
import Button from "../Button/Button"

export default function TextHolder({title, innerText, buttonText, colorText}){
    return <div className={`max-w-full flex-nowrap ${colorText? colorText : 'text-white'} md:m-auto text-center text-base md:text-lg
    flex flex-col w-full white-space: nowrap justify-between font-semibold md:bg-transparent`}>
    <TextTitle title={title} />
        <div className="m-2 p-1 overflow-hidden min-h-20"><p className="text-lg">{innerText}</p></div>
        {buttonText? <Button text={buttonText}/> : ''}
    </div>
}