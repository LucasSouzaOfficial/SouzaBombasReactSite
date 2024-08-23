import Card from "./card"

const image = '/semt.jpg'

export default function ThreeCards(){
    return <div className="m-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:flex-row md:max-w-6xl p-2 text-black max-w-screen gap-1 relative
     transform translate-y-[-100px]">
            <Card img={image} title="Pressurizadores" text="Oferecemos também à nossos clientes pressurizadores da melhor qualidade."
             button="Saiba mais"/>
            <Card img={image} title="Bombas D'água" text="Oferecemos também aos nossos clientes motobombas das mais diversas finalidades." 
            button="Saiba mais"/>
            <Card img={image} title="Serviços" text="Oferecemos um atendimento completo da parte de Instalação e Assistência dos produtos." 
            button="Saiba mais"/>
    </div>
}