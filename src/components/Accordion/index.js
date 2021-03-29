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
    accordData.include.map(elm =>{ 
    return <section  
      className='accordContainer'
      key={elm.id}> 
      <div className='accordBox'>
        <span>
          <img 
            src={require('../../assets/imgs/'+elm.image.path).default} 
            alt={elm.image.alt}
            className='accordImg'/>
        </span>
          <div className='accordContent'>
            <div className='accordTitle'>{elm.title}</div>
            <div className='textContent'>
              <div className='accordText'>{elm.text}</div>
            </div>
            <span className='moreInfo' onClick={() => handleInfoVisible(elm)}> M&#xE1;s informaci&#xF3;n y condiciones <span>
              <img className={`${elm.open ? 'rotate' : ''}`} src={arrow} alt='arrow'/>
              </span>
            </span>
          </div>
        </div>
      {elm.open ? <section className='infoContainter'>
        <div className='include'>Incluye </div>
          <div className='infoContent'> 
            {elm.info.map(i => 
              <div 
                className='list'
                key={i.id}> &bull; {i.text}</div>
            )} 
          </div> 
        <span className='addInfo'>Valores no acumulables a otras promociones similares</span>
      </section> : null}
    </section>})
  );
}
 
export default Accordion;