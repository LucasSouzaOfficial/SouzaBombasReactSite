import TextHolder from "./Text-Holder"

export default function Card({img, title, text, button}){
    return <div className="m-auto item-center text-center relative inline-block bg-transparent bg-white rounded h-full xl:w-[360px]
    overflow-hidden shadow-xl drop-shadow-xl w-full transition-all ease-in-out duration-300 hover:translate-y-[-4px]">
        <img className="m-auto mb-0" src={img}></img>
        <div className="">
            <TextHolder innerText={text} title={title} 
              colorText="text-black" buttonText={button} textCSS={'!text-xl'}
              titleCSS={'text-3xl py-1'}
              buttonCss={"hover:bg-transparent hover:text-primary-color border border-primary-color transition-all duration-300 ease-in-out bg-primary-color m-[12px]"}></TextHolder>

        </div>
    </div>
}
