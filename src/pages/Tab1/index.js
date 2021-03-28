import { useState } from 'react';
import produce from 'immer';

import tab1Data from '../../api/tab1Data';
// components
import Box from '../../components/Box/index.js';
// style
import './style.scss';

// images
import star from '../../assets/imgs/stars.png';

const Tab1 = () => {
  const [allBoxes, setAllBoxes] = useState(tab1Data);

  const handleBoxClick = (box) => {
    // const newBoxes = produce(allBoxes, draftBox => {
    //   draftBox.map(b => b.id === box.id ? ({...box, status: !box.status}) : box)
    // })
    setAllBoxes(produce(allBoxes , draftBox => draftBox.map(b => b.id === box.id ? ({...box, status: !box.status}) : b)) )

  }

  return (
    <section className='container'>
      <div className='header'>
        <span className='title'>HOTEL Mieres del Cam&iacute;n Apartamentos</span>
        <span> <img className='stars' src={star} alt='4-star'/></span>
      </div>
      <section className='boxContainer'>
        {tab1Data.map(tab1 => <Box
          key={tab1.id}
          onBoxClick={(box) => handleBoxClick(box)}
          boxData={tab1}
        />)}
      </section>
    </section>
  );
}

export default Tab1;