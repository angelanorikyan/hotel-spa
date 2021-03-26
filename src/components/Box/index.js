import { useState } from 'react';
import './style.scss';
const Box = ({data}) => {
  return ( 
    <div className='boxWrapper'>
      <div>{data.title}</div>
      <span className='separator'></span>
      <ul>
        {data.include.map(elm =>
        <li key={elm.id}>{elm.value}</li>
        )}
         <input type="radio" id="huey" name="drone" value="huey"
         checked></input>
      </ul>
    </div>
  );
}
 
export default Box;