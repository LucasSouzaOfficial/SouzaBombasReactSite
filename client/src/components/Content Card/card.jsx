import TextHolder from "./Text-Holder"

export default function Card({img, title, text, button}){
    return <div className="m-auto item-center text-center relative bg-transparent bg-white rounded h-full xl:w-[360px]
    overflow-hidden shadow-xl drop-shadow-xl flex flex-col w-[90vw] md:w-[320px] transition-all ease-in-out duration-300 hover:translate-y-[-4px]">
        <img className="m-0 p-2" src={img}></img>
        <div className="h-full">
            <TextHolder innerText={text} title={title} 
              colorText="text-black" buttonText={button} textCSS={'!text-base'}
              titleCSS={'text-lg md:text-xl py-1'}
              buttonCss={"hover:bg-transparent mt-auto hover:text-primary-color border border-primary-color transition-all duration-300 ease-in-out bg-primary-color m-[12px]"}></TextHolder>

        </div>
    </div>
}
