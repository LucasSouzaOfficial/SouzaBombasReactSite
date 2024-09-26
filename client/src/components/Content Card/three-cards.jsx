import Card from "./card"
import image01 from "../../assets/images/semt.jpg"
import image02 from "../../assets/images/bomba-homepage-1.png"
import image03 from "../../assets/images/99.jpg"
import MediaContent from "../Media Content/MediaContent"

const images = [image01, image02, image03]

export default function ThreeCards(){
    return <div className="transform max-w-full md:translate-y-[-100px] relative"> <div className="m-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:flex-row md:max-w-6xl p-2 text-black max-w-screen gap-4 relative
     ">
            <Card img={images[0]} title="Pressurizadores" text="Oferecemos também à nossos clientes pressurizadores da melhor qualidade."
             button="Saiba mais"/>
            <Card img={images[1]} title="Bombas D'água" text="Oferecemos também aos nossos clientes motobombas das mais diversas finalidades." 
            button="Saiba mais"/>
            <Card img={images[2]} title="Serviços" text="Oferecemos um atendimento completo da parte de Instalação e Assistência dos produtos." 
            button="Saiba mais"/>
           
    </div> <MediaContent title={'Quer contratar um de nossos serviços? Vamos conversar'}/> </div>
}
