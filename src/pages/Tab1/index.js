import { useState } from 'react';
import data from '../../api/tab1Data';
import { v4 as uuidv4 } from 'uuid';
// components
import Box from '../../components/Box/index.js';
// style
import './style.scss';
// images
import star from '../../assets/imgs/stars.png';

const Tab1 = () => {
  const [value, setValue] = useState();

  const handleBoxClick = (box) => {
    setValue(box.id)
  }

  return (
    <section className='container'>
      <div className='header'>
        <span className='title'>HOTEL Mieres del Cam&iacute;n Apartamentos</span>
        <span> <img className='stars' src={star} alt='4-star'/></span>
      </div>
      <section className='boxContainer'>
        {data.map(tab1 => <Box
          key={uuidv4()}
          onBoxClick={(box) => handleBoxClick(box)}
          boxData={tab1}
          value={value}
        />)}
      </section>
    </section>
  );
}

export default Tab1;