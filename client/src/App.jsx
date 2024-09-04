import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/navbar'
import TextHolder from './components/Content Card/Text-Holder';
import ThreeCards from './components/Content Card/three-cards';
import CarouselImage from './assets/images/bobma.avif'
import BackgroundWithCarousel from './components/Background Image/Background&Carousel';
import Button from './components/Button/Button';

export default function App() {
  const [count, setCount] = useState(0);

  const CarouselProps = {

    title: `Bombas D'água vendas e manutenção`,
    innerText: 'Estamos focados em fornecer o mais alto nível de qualidade e excelência em nosso serviço ao cliente.',
    buttonText: 'Faça seu Orçamento Agora',

  }

  return (
  <main>
        <Navbar /> 
        <BackgroundWithCarousel>
          
          <div className="flex justify-between items-center p-4 w-fit rounded-2xl bg-[#171e33;] min-w-full">
            <TextHolder {...CarouselProps} buttonCss="bg-[#171e33] border"/>
          </div>
        
          <div className="flex justify-between items-center min-w-full rounded-2xl bg-sky-500">
            <TextHolder {...CarouselProps} buttonCss="bg-sky-500 border"/>
          </div>

        </BackgroundWithCarousel>
        <ThreeCards />
  </main>
  );
}
