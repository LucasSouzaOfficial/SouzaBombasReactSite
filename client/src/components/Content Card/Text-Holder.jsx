import TextTitle from "./Text-Title" 
import Button from "../Button/Button"


export default function TextHolder({title, titleCSS, innerText, textCSS, buttonText, colorText, buttonCss, CSS}){
    return <div className={`max-w-full mt-0 h-fit flex-nowrap ${colorText? colorText : 'text-white'} md: text-start text-base md:text-lg
    flex flex-col w-full white-space: nowrap justify-between font-semibold md:bg-transparent p-4 ${CSS}`}>
    <TextTitle title={title} css={titleCSS} />
        <div className={`m-2 mt-0 p-2 text-start mb-0 overflow-hidden min-h-20`}>
          <p className={`font-normal tracking-tight mb-4 ${textCSS}`}>
            {innerText}
          </p>
      
        </div>
        {buttonText? <Button css={buttonCss} text={buttonText}/> : ''}
    </div>
}
