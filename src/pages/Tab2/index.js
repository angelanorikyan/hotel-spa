import { useState } from 'react';

import tab2Data from '../../api/tab2Data';
// components
import Accordion from '../../components/Accordion/index.js';
// images
import arrow from '../../assets/imgs/arrow.png';

// style 
import './style.scss'


const Tab2 = () => {
  const [optionVisible, setOptionVisible] = useState();
  const [accordData] = useState(tab2Data);

  const handleOptionVisible = (tab2) => {

    accordData.forEach(elm => {
      if(elm.id === tab2.id){
        elm.open = !tab2.open
        setOptionVisible(!optionVisible)
      }
    })
  }

  return ( 
    tab2Data.map(tab2 => <div 
      className='container options'
      key={tab2.id}>
      <span className='hotline'>Exclusivo Hoteles.com</span>
      <div className='accordWrapper' onClick={() => handleOptionVisible(tab2)}>
        <span><img className={`arrow ${tab2.open ? 'rotate' : ''}`} src={arrow} alt='arrow'/></span>
        <span className='mainTitle'>{tab2.title}</span>
        <span className='subTitle'>Opcional</span>
      </div>
      {tab2.open ? 
        <Accordion 
          accordData={tab2}
          /> 
          : null}
        
    </div>
    )
   );
}
 
export default Tab2;