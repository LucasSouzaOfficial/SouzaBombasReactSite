import TextTitle from "../Content Card/Text-Title"
import Button from "../Button/Button"

export default function MediaContent({title}){
  
  return(
  
    <div className="flex max-w-full justify-between mb-0 m-0 mt-10">

      <div className="max-w-6xl w-full flex flex-col lg:flex-row m-auto h-fit justify-between">
        <div className="flex max-w-4xl text-start item-start flex-col">
          <TextTitle title={title} css="text-3xl max-w-[500px]" />
          <p className="max-w-[500px] m-2 text-lg font-normal md:p-2 p-4">Estamos focados em fornecer aos nossos clientes o mais alto nível de qualidade e atendimento ao cliente.</p>
        </div>
          <div className="text-end item-end p-2 items-center my-auto"><Button text={`fale com um especialista`} css={`bg-primary-color self-center m-auto`}/></div>
      </div>
     
    </div>

  ) 
}
