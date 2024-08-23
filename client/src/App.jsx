import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/navbar'
import BgImage from './components/Background Image/bg-image';
import AdBar from './components/Navbar/ad-bar';
import Carousel from './components/Carousel/carousel';
import TextHolder from './components/Content Card/Text-Holder';
import ContextProvider from "./components/Background Image/contextProvider";
import ThreeCards from './components/Content Card/three-cards';
import CarouselImage from '/bobma.avif'
import BackgroundWithCarousel from './components/Background Image/Background&Carousel';

export default function App() {
  const [count, setCount] = useState(0);

  const CarouselProps = {

    title: `Bombas D'água vendas e manutenção`,
    innerText: 'Estamos focados em fornecer aos nossos clientes o mais alto nível de qualidade e excelente serviço ao cliente.',
    buttonText: 'Faça seu Orçamento Agora',

  }

  return (
  <main>
        <Navbar /> 
        <BackgroundWithCarousel>
          
          <div className="flex justify-between items-center min-w-full">
          <TextHolder {...CarouselProps} />
          <img className="max-w-lg hidden md:block m-4" src={CarouselImage}></img>
          </div>
          <div className="flex justify-between items-center min-w-full">
            <TextHolder {...CarouselProps}/>
          <iframe className='text-center m-14'
              width="960"
              height="310"
              src={`https://www.youtube.com/embed/wqpKwZAPbc0?start=115&autoplay=1&mute=1`}
              title="Souza bombas Manutenções"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;   
                picture-in-picture"
              allowfullscreen   

                />
          
          </div>
        </BackgroundWithCarousel>
        <ThreeCards />
  </main>
  );
}
