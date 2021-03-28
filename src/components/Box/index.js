import { useState } from 'react';

// style
import './style.scss';

const Box = ({boxData, onBoxClick}) => {
  const [boxStatus, setBoxStatus] = useState(boxData)

  // const handleChange = (e) => {
  //   if(boxStatus.id === e.target.value){
  //     const obj = ({...boxStatus, })
  //     console.log(obj, 111)
  //     setBoxStatus(obj)
  //   }

  //   // console.log(e, 'event')
  // }

  return (
    <label>
    <div
      className={`boxWrapper ${boxData.status ? 'active' : ''}`}
      onClick={() => onBoxClick(boxData)}>

        <div className={`boxTitle ${boxData.status ? 'active' : ''}`}>{boxData.title}</div>
        <div className='separator'></div>
      <ul>
        {boxData.include.map(elm =>
        <li key={elm.id}>{elm.value}</li>
        )}
      </ul>
      <div className={`radioWrapper ${boxData.status ? 'active' : ''}`}>
        <div className='package'>
        <input 
          type="radio" 
          name="package" 
          value={boxData.id} 
          // onChange={(e) => handleChange(e)}
          checked={boxData.status}
          ></input>
          Elegir regimen
        </div>
      </div>
    </div>
    </label>
  );
}
 
export default Box;