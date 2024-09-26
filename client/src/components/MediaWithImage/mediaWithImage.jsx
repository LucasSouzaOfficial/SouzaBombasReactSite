import waterBackground from '../../assets/images/waterBackground.png'
import TextHolder from '../Content Card/Text-Holder'
import Button from '../Button/Button'
import IdeaIcon from '../Media Content/ideaIcon'
import TextTitle from '../Content Card/Text-Title'

export default function MediaWithBackImage(){

  const TextHolderProps = {
    title:'Focados em fornecer aos nossos clientes o mais alto nível de qualidade',
    innerText: 'Um time formado por pessoas inteligentes e apaixonadas e com as melhores ferramentas e abordagens à sua disposição, entregando grandes resultados para seu projeto. Entender seus requisitos, objetivos e escopo final é importante para nós. Nós ouvimos e trabalhamos juntos para criar uma experiência verdadeiramente única e inesquecível.',
    buttonText: 'Leia Nossa História',
    buttonCss: 'bg-primary-color md:!mx-6 !m-auto',
    titleCSS: 'text-4xl',
    textCSS: 'text-xl font-normal',
  }

  return(
  
    <div className={`w-full flex flex-row h-fit lg:h-[550px] my-8 md:my-0 bg-no-repeat bg-cover items-center m-auto justify-center`} style={{backgroundImage: `url(${waterBackground})`}}>
      <div className='max-w-6xl w-full flex flex-col lg:flex-row justify-between'>
         <div className='lg:max-w-lg self-center m-auto md:self-start'> 
            <TextHolder {...TextHolderProps} />
          </div>
          <div className='grid grid-cols-2 gap-2 h-full flex-1 min-h-96 p-4 md:ml-16 max-w-full text-white text-2xl from-neutral-700'> 
            <div className='flex flex-col m-auto'>
              <IdeaIcon />
              <TextTitle title={'Inovação'} />
            </div>
            <div className='flex flex-col m-auto'>
              <IdeaIcon />
              <TextTitle title={'Integridade'} />
            </div>
            <div className='flex flex-col m-auto'>
              <IdeaIcon />
              <TextTitle title={'Eficiência'} />
            </div>
            <div className='flex flex-col m-auto'>
              <IdeaIcon />
              <TextTitle title={'Planejamento'} />
            </div>
          </div>
      </div>
    </div>

  )
}
