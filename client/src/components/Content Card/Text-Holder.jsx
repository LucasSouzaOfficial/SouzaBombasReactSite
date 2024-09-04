import TextTitle from "./Text-Title" 
import Button from "../Button/Button"


export default function TextHolder({title, innerText, buttonText, colorText, buttonCss}){
    return <div className={`max-w-full mt-0 h-fit flex-nowrap ${colorText? colorText : 'text-white'} md:m-auto text-center text-base md:text-lg
    flex flex-col w-full white-space: nowrap justify-between font-semibold md:bg-transparent p-4`}>
    <TextTitle title={title} />
        <div className="m-2 mt-0 p-1 overflow-hidden min-h-20"><p className="font-normal text-xl tracking-tight">{innerText}</p></div>
        {buttonText? <Button css={buttonCss} text={buttonText}/> : ''}
    </div>
}
