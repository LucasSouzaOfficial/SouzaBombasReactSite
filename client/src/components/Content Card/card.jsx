import TextHolder from "./Text-Holder"

export default function Card({img, title, text, button}){
    return <div className="m-auto item-center text-center relative inline-block bg-transparent bg-white rounded h-full xl:w-[360px]
    overflow-hidden shadow-xl drop-shadow-xl">
        <img className="m-auto" src={img}></img>
        <div className="">
            <TextHolder innerText={text} title={title} colorText="text-black" buttonText={button}></TextHolder>
        </div>
    </div>
}