import { useState } from 'react';


// images
import arrow from '../../assets/imgs/arrow.png';
import images from '../../assets/imgs/yoga.png';
// style
import './style.scss';

const Accordion = ({accordData}) => {
  const [infoVisible, setInfoVisible] = useState(false);
  const [includeData] = useState(accordData.include);

  const handleInfoVisible = (tab2) => {
    includeData.forEach(elm => {
      if(elm.id === tab2.id){
        elm.open = !tab2.open
        setInfoVisible(!infoVisible)
      }
    })
   
  }

  return ( 
    accordData.include.map(elm =><section className='accordContainer'> 
     <div className='accordBox'>
      <span><img src={`${images}`} alt={elm.image.alt}/></span>
        <div class='accordContent'>
          <div className='accordTitle'>{elm.title}</div>
          <div className='textContent'>
            <div className='accordText'>{elm.text}</div>
          </div>
          <span className='moreInfo' onClick={() => handleInfoVisible(elm)}> Mas info y condiciones <span><img className={`${infoVisible ? 'rotate' : ''}`} src={arrow} alt='arrow'/></span></span>
        </div>
      </div>
      {elm.open ? <section className='infoContainter'><div className='include'>Incluye </div><div className='infoContent'> {elm.info.map(i => 
        <div className='list'><span className='dot'></span>{i.text}</div>
      )} </div> </section> : null}
    </section>)
  );
}
 
export default Accordion;