import TextHolder from "./Text-Holder"

export default function Card({img, title, text, button}){
    return <div className="m-auto item-center text-center relative inline-block bg-transparent bg-white rounded h-full w-[360px]
    overflow-hidden">
        <img className="m-2" src={img}></img>
        <div className="">
            <TextHolder innerText={text} title={title} colorText="text-black" buttonText={button}></TextHolder>
        </div>
    </div>
}