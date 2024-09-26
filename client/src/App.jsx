import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar/navbar'
import TextHolder from './components/Content Card/Text-Holder';
import ThreeCards from './components/Content Card/three-cards';
import CarouselImage from './assets/images/waterbomb.gif'
import BackgroundWithCarousel from './components/Background Image/Background&Carousel';
import MediaWithBackImage from './components/MediaWithImage/mediaWithImage.jsx';


export default function App() {


  const CarouselProps = {

    title: `Bombas D'água vendas e manutenção`,
    innerText: 'Estamos focados em fornecer o mais alto nível de qualidade e excelência em nosso serviço ao cliente.',
    buttonText: 'Faça seu Orçamento Agora',
    textCSS: 'text-2xl',
    titleCSS: 'text-4xl',
    CSS: '!bg-black/60 h-full rounded-xl',
  }

const CarouselProps2 = {

  title: `Bombas D'água vendas e manutenção`,
  innerText: 'Estamos focados em fornecer o mais alto nível de qualidade e excelência em nosso serviço ao cliente.',
  buttonText: 'Faça seu Orçamento Agora',
  textCSS: 'text-2xl',
  titleCSS: 'text-4xl',
  CSS: 'h-full rounded-xl',
}
  const TextHolderProps = {
    
    title: "Bombas D'agua",
    innerText: 'Garantimos o funcionamento de todos os dimensionamentos que prestamos aos clientes, também oferecemos manutenção dos equipamentos, peças e consultoria na área.',
    textCSS: 'text-xl text-center text-black',
    titleCSS: 'text-4xl text-black text-center m-auto',
    
  } 

  return (
  <main className=''>
        <Navbar /> 
        <BackgroundWithCarousel>
          
          <div className="flex justify-between items-center p-4 w-fit min-w-full">
          
            <TextHolder {...CarouselProps} buttonCss="bg-primary-corlor hover:bg-transparent border-white hover:shadow hover:shadow-white hover:shadow-md border-2 border-rounded transiton-all ease-in-out duration-500"/>
            <div className='hidden md:flex lg:w-full w-5/6 items-center h-full m-2'>
              <img className='m-auto w-full h-full rounded-xl' src={CarouselImage}></img>
            </div>
          </div>
        
          <div className="flex justify-between items-center min-w-full rounded-2xl">
            <TextHolder {...CarouselProps2} buttonCss="border hover:bg-primary-color hover:border-primary-color transiton-all ease-in-out duration-300"/>
          </div>

        </BackgroundWithCarousel>
        <ThreeCards />
        <MediaWithBackImage />
        <div className='w-full max-w-6xl items-center m-auto'>
          <TextHolder {...TextHolderProps} />
        </div>
  </main>
  );
}
